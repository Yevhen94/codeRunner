import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import RepoItem from "../../components/repoitem/RepoItem";
import { setCurrentPage } from "../../reducer/reposReduser";
import Search from "../../components/search/Search";
import styles from "./home.module.scss";
import { PageCounter } from "../../actions/mainFunctions/pagesCounter";
import { setItems } from "../../reducer/reposReduser";

const Home = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.items);
  const loading = useSelector((state) => state.repos.loading);
  const currPage = useSelector((state) => state.repos.currPage);
  const perPage = useSelector((state) => state.repos.perPage);
  const totalItems = useSelector((state) => state.repos.totalItems);
  const pagesCount = Math.ceil(totalItems / perPage);

  const [selected, setSelected] = useState("Sorted by:");

  const pages = [];
  PageCounter(pages, pagesCount, currPage);
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };

  const sorted = (e) => {
    let newList = [...repos];
    if (e.target.value === "score") {
      newList.sort(function (a, b) {
        return +a.stargazers_count - +b.stargazers_count;
      });
      setSelected(`Sorted by: ${e.target.value}`);
      e.target.selectedIndex = 0;
      dispatch(setItems(newList));
    } else if (e.target.value === "name") {
      newList.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      setSelected(`Sorted by: ${e.target.value}`);
      e.target.selectedIndex = 0;
      dispatch(setItems(newList));
    } else if (e.target.value === "date") {
      newList.sort(function (a, b) {
        return moment().diff(a.created_at) - moment().diff(b.created_at);
      });
      setSelected(`Sorted by: ${e.target.value}`);
      e.target.selectedIndex = 0;
      dispatch(setItems(newList));
    }
  };

  return (
    <div className="container">
      <main className={styles.main}>
        <div className={`${styles["main__wrapper"]} block-size`}>
          <Search />
          <div className={styles.content}>
            {!loading ? (
              <div className={styles.title}>
                <h1 className="title">{`Search items - ${totalItems}`}</h1>
              </div>
            ) : null}

            {repos.length > 0 ? (
              <div className={styles.sorting}>
                <select
                  name="sort"
                  onChange={(e) => sorted(e)}
                  className={styles.select}
                >
                  <option className={styles.option}>{selected}</option>
                  <option className={styles.option} value="date">
                    Date
                  </option>
                  <option className={styles.option} value="score">
                    Score
                  </option>
                  <option className={styles.option} value="name">
                    Name
                  </option>
                </select>
              </div>
            ) : null}

            {!loading ? (
              repos.map((item, index) => (
                <RepoItem repo={item} key={Date.now() + index} />
              ))
            ) : (
              <div className={styles.loadingWrapper}>
                <div className={styles.loading}></div>
              </div>
            )}
          </div>
          <div className={styles.pagination}>
            {pages.length > 0
              ? pages.map((item, index) => (
                  <span
                    className={
                      currPage === item
                        ? `${styles["pagination__item"]} ${styles["pagination__item--current"]}`
                        : styles["pagination__item"]
                    }
                    key={Date.now() + index}
                    onClick={() => {
                      dispatch(setCurrentPage(item));
                      scrollUp();
                    }}
                  >
                    {item}
                  </span>
                ))
              : null}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
