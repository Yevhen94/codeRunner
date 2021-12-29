import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../elements/button/Button";
import style from "./singlerepo.module.scss";

const SingleRepo = () => {
  const singleRepo = useSelector((state) => state.repos.singlePageContent);
  console.log(singleRepo);

  return (
    <div className="container">
      <main className={style.main}>
        <div className={style["main__wrapper"]}>
          <div className={style.title}>
            <h1 className="title">{singleRepo.login}</h1>
          </div>
          <div className={style.content}>
            <div className={style.photo}>
              <img src={singleRepo.photo} alt="avatar" className="img" />
            </div>
            <div className={style["content__data"]}>
              <div className={style["content__data__wrapper"]}>
                <div className={style.name}>
                  <span className={style.text}>Name:</span>
                  <span className={style.data}>{singleRepo.name}</span>
                </div>
                <div className={style.created}>
                  <span className={style.text}>Created:</span>
                  <span className={style.data}>{singleRepo.created}</span>
                </div>
                <div className={style.description}>
                  <span className={style.text}>Description:</span>
                  <span className={style.data}>{singleRepo.description}</span>
                </div>
                <div className={style.link}>
                  <span className={style.text}>Link to GitHub:</span>
                  <a
                    href={singleRepo.link}
                    className={style.data}
                    target={"blank"}
                  >
                    {singleRepo.link}
                  </a>
                </div>
              </div>
              <div className={style.back}>
                <Link className="link" to="/">
                  Go Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SingleRepo;
