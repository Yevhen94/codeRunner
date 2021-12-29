import React from "react";
import style from "./news.module.scss";

const News = () => {
  return (
    <>
      <main className={style.main}>
        <div className={style.mainWrapper}>
          <h1>News page</h1>
          <div className={style.news}>
            <div className={style["news-item"]}>
              <div className={style["news-image"]}></div>
              <div className={style["news-content"]}></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default News;
