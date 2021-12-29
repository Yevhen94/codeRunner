import React from "react";
import style from "./blog.module.scss";

const Blog = () => {
  return (
    <>
      <div className="container">
        <main className={style.main}>
          <div className={style["main__wrapper"]}>
            <h1>Blog page</h1>
          </div>
          <div className={style["main__content"]}></div>
        </main>
      </div>
    </>
  );
};

export default Blog;
