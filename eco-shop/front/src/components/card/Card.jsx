import React, { useState, useContext } from "react";
import Button from "../../elements/button/Button";
import LangContext from "../../context/Context";
import style from "./card.module.scss";

const Card = (props) => {
  const { shopList, setShopList } = useContext(LangContext);
  const [count, setCount] = useState(0);

  const addCountToItem = (title, count) => {
    let change = 0;
    for (let i = 0; i < shopList.length; i++) {
      if (shopList[i].title === title) {
        shopList[i].count = shopList[i].count + count;
        setShopList([...shopList]);
        setCount(0);
        change++;
      }
    }
    if (change === 0) {
      let shopItem = {};
      shopItem.url = props.url;
      shopItem.title = props.title;
      shopItem.price = props.price;
      shopItem.count = count;
      setShopList([...shopList, shopItem]);
      setCount(0);
    }
  };

  return (
    <>
      <div className={style.contentItem}>
        <div className={style["contentItem__image"]}>
          <img src={props.url} alt="product" className="img" />
        </div>
        <div className={style["contentItem__content"]}>
          <div className={style.itemTitleBlock}>
            <h5 className={style.itemTitle}>{props.title}</h5>
          </div>
          <div className={style.itemPrice}>
            <span className={style["itemPrice__text"]}>
              {props.priceOptions}
            </span>
            <span className={style["itemPrice__text"]}>{props.price}</span>
          </div>
          <div className={style.itemCounter}>
            <div className={style["itemCounter__buttons"]}>
              <Button
                type={"button"}
                className={style.btnCount}
                content={"-"}
                feedbackClick={() => {
                  if (count) {
                    setCount(count - 1);
                  }
                }}
              />
              <span className={style.count}>{count}</span>
              <Button
                type={"button"}
                className={style.btnCount}
                content={"+"}
                feedbackClick={() => {
                  setCount(count + 1);
                }}
              />
            </div>
            <div className={style["itemCounter__sum"]}>
              <span className={style["itemCounter__sum-text"]}>
                {props.sumText}
              </span>
              <span className={style["itemCounter__sum-result"]}>
                {(count * props.price).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
        <div className={style["contentItem__button"]}>
          <Button
            type={"button"}
            className={style.button}
            content={props.btnBuy}
            icon={props.icon}
            feedbackClick={() => {
              if (count > 0) {
                addCountToItem(props.title, count);
              }
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
