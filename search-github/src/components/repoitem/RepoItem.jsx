import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  setFavourList,
  setSinglePageContent,
} from "../../reducer/reposReduser";
import style from "./repoitem.module.scss";

const RepoItem = (props) => {
  const dispatch = useDispatch();
  const favourList = useSelector((state) => state.repos.favourList);
  const repo = props.repo;

  const changeClasses = () => {
    for (let i = 0; i < favourList.length; i++) {
      if (
        favourList[i].title === repo.name &&
        favourList[i].photo === repo.owner.avatar_url
      )
        return true;
    }
  };

  const addCountToItem = () => {
    let favItem = {};
    favItem.photo = repo.owner.avatar_url;
    favItem.title = repo.name;
    favItem.score = repo.stargazers_count;
    for (let i = 0; i < favourList.length; i++) {
      if (
        favourList[i].title === favItem.title &&
        favourList[i].photo === favItem.photo
      ) {
        return;
      }
    }
    dispatch(setFavourList(favItem));
  };

  const addSinglePageContent = () => {
    let item = {};
    item.photo = repo.owner.avatar_url;
    item.login = repo.owner.login;
    item.name = repo.name;
    item.created = repo.created_at;
    item.description = repo.description;
    item.link = repo.html_url;

    dispatch(setSinglePageContent(item));
  };

  return (
    <>
      <div className={style.item}>
        <div className={style["item__avatar"]}>
          <img src={repo.owner.avatar_url} alt="avatar" className="img" />
        </div>
        <div className={style.wrapper}>
          <div className={style["item__title"]}>
            <h4 className="title">{repo.name}</h4>
          </div>
          <div
            className={style["item__button"]}
            onClick={() => addSinglePageContent()}
          >
            <Link className="link" to="/singlerepo">
              View more
            </Link>
          </div>
        </div>
        <div className={style["item__rating"]}>
          <span className={style["item__rating__text"]}>SCORE</span>
          <span className={style["item__rating__total"]}>
            {repo.stargazers_count}
          </span>
        </div>
        <div className={style["item__favourites"]} title="Add to favourites">
          <div
            className={style["item__favourites__wrapper"]}
            onClick={() => addCountToItem()}
          >
            <svg
              className={
                changeClasses()
                  ? `icon icon-star icon-star--checked`
                  : `icon icon-star`
              }
            >
              <use xlinkHref="#icon-star"></use>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default RepoItem;
