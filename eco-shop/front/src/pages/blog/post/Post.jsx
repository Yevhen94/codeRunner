import React from "react";
import style from "post.module.scss";

const Post = () => {
  return (
    <>
      <div className={style.post}>
        <div className={style["post__wrapper"]}>
          <div className={style["post__img"]}>
            <img src="" alt="" className="img" />
          </div>
          <div className={style["post__content"]}>
            <div className={style["post__content__title"]}>
              <h3 className="title"></h3>
            </div>
            <div className={style["post__content__text"]}>
              <p className={style.paragraph}></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
