import React, { useContext, useEffect } from "react";
import style from "./shopcart.module.scss";
import LangContext from "../../context/Context";
import Button from "../../elements/button/Button";

const ShopCart = ({ active, setActive }) => {
  const { shopList, setShopList, content } = useContext(LangContext);

  useEffect(() => {
    const closeModalKey = (e) => {
      if (e.keyCode === 27) {
        setActive({ ...active, cart: false });
      }
    };
    window.addEventListener("keydown", closeModalKey);
    return () => window.removeEventListener("keydown", closeModalKey);
  });

  const changeShopList = (index) => {
    shopList.splice(index, 1);
    setShopList([...shopList]);
  };

  const totalPrice = () => {
    let total = 0;
    for (let i = 0; i < shopList.length; i++) {
      total = total + +shopList[i].count * +shopList[i].price;
    }
    return total;
  };

  return (
    <>
      <div className={active.cart ? style.wrapper : ""}></div>

      <div
        className={active.cart ? `${style.cart} ${style.open}` : style.cart}
        onMouseDown={() => setActive({ ...active, cart: false })}
      >
        <div
          className={style["cart__wrapper"]}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div className={style["cart__wrapper__content"]}>
            <div className={style["cart__title"]}>
              <h4 className={style["cart__title__text"]}>
                {content.shopCart.title}
              </h4>
            </div>
            <div
              className={style["cart__clear"]}
              onClick={() => {
                setShopList([]);
              }}
            >
              <span className={style["cart__clear__text"]}>
                {content.shopCart.clear}
              </span>
            </div>
            <div
              className={style["cart__close"]}
              onClick={() => setActive({ ...active, cart: false })}
            >
              <svg className="icon icon-close icon-close--cart">
                <use xlinkHref="#icon-close"></use>
              </svg>
            </div>
            <div className={style["cart__content"]}>
              {shopList.length > 0 ? (
                shopList.map((item, index) => (
                  <div className={style.item} key={Date.now() + index}>
                    <div className={style["item__img"]}>
                      <img src={item.url} alt="product item" className="img" />
                    </div>
                    <div className={style["item__title"]}>
                      <h6 className={style["item__title__text"]}>
                        {item.title}
                      </h6>
                      <span className={style["item__title__price"]}>
                        {item.count + " X " + item.price.toFixed(2)}
                      </span>
                    </div>
                    <div className={style["item__sum"]}>
                      <span className={style["item__sum__text"]}>
                        {(item.price * item.count).toFixed(2)}
                      </span>
                    </div>
                    <div
                      className={style["item__close"]}
                      onClick={() => {
                        changeShopList(index);
                      }}
                    >
                      <svg className="icon icon-close icon-close--cart-item">
                        <use xlinkHref="#icon-close"></use>
                      </svg>
                    </div>
                  </div>
                ))
              ) : (
                <div className={style.empty}>
                  <span className={style["empty__text"]}>
                    {content.shopCart.empty}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className={style["cart__result"]}>
            <div className={style["cart__result__text-block"]}>
              <span className={style["cart__result__text"]}>
                {content.shopCart.total}
              </span>
              <span
                className={style["cart__result__total"]}
              >{` ${totalPrice().toFixed(2)}`}</span>
            </div>
            <Button
              type={"button"}
              className={style.button}
              content={content.buttonsContent.btnOrder}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCart;
