import React, { useState, useEffect } from "react";
import styles from "./search.module.scss";
import Input from "../../elements/input/Input";
import Button from "../../elements/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "../../actions/getrepos/getRepos";
import { setCurrentPage, setSearching } from "../../reducer/reposReduser";

const Search = () => {
  const dispatch = useDispatch();
  const currPage = useSelector((state) => state.repos.currPage);
  const perPage = useSelector((state) => state.repos.perPage);
  const searching = useSelector((state) => state.repos.searching);
  const [valid, setValid] = useState({
    classes: styles.input,
    message: "",
  });

  const onSubmit = async () => {
    if (searching) {
      setValid({ ...valid, classes: styles.input, message: "" });
      dispatch(setCurrentPage(1));
      dispatch(getRepos(searching, perPage, currPage));
    } else {
      setValid({
        ...valid,
        classes: `${styles.input} ${styles["input--error"]}`,
        message: "Please, enter your request!",
      });
    }
  };

  useEffect(() => {
    const enterSubmit = (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        onSubmit();
      }
    };
    window.addEventListener("keydown", (e) => enterSubmit(e));
  });

  useEffect(() => {
    if (searching) {
      dispatch(getRepos(searching, perPage, currPage));
    }
  }, [currPage]);

  return (
    <>
      <div className={styles.wrapper}>
        <form className={styles.search}>
          <Input
            type={"search"}
            name={"text"}
            className={valid.classes}
            value={searching}
            placeholder={"Enter your request here"}
            onChange={(e) => {
              dispatch(setSearching(e.target.value));
              setValid({ ...valid, classes: styles.input, message: "" });
            }}
          />

          <Button
            type={"button"}
            className={styles.button}
            content={"Search"}
            onClick={onSubmit}
          />
        </form>
        <div className={styles["form-error"]}>
          <span>{valid.message}</span>
        </div>
      </div>
    </>
  );
};

export default Search;
