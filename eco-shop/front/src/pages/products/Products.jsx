import React, { useState, useContext, useEffect } from "react";
import LangContext from "../../context/Context";
import style from "./products.module.scss";
import Button from "../../elements/button/Button";
import Card from "../../components/card/Card";
import { CartForBtn } from "../../variables/materialIcons";
import { btnsSvgContent } from "../../variables/data";
import { categoriesSvg } from "../../variables/data";
import { scrollUp } from "../../variables/mainFunctions";

const Products = () => {
  const { content } = useContext(LangContext);

  const [products, setProducts] = useState(allProducts());
  const [classes, setClasses] = useState(false);
  const [active, setActive] = useState([
    { standart: true },
    [false, false, false, false, false, false],
  ]);

  function allProducts() {
    return content.productsContent.map((list) => {
      return list.map((item, index) => (
        <Card
          key={Date.now() + index}
          url={item.url}
          priceOptions={item.priceOptions}
          title={item.title}
          price={item.price}
          sumText={content.buttonsContent.sumText}
          icon={<CartForBtn />}
          btnBuy={content.buttonsContent.btnBuy}
        />
      ));
    });
  }

  function getCategory(index) {
    return content.productsContent[index].map((item, index) => (
      <Card
        key={Date.now() + index}
        url={item.url}
        priceOptions={item.priceOptions}
        title={item.title}
        price={item.price}
        sumText={content.buttonsContent.sumText}
        icon={<CartForBtn />}
        btnBuy={content.buttonsContent.btnBuy}
      />
    ));
  }

  const removeStyles = (e) => {
    for (let i = 0; i < e.target.parentNode.children.length; i++) {
      active[1][i] = false;
    }
  };

  return (
    <>
      <main className={`${style.main} block-size`}>
        <div className={style["main__wrapper"]}>
          <div className={style["main__title"]}>
            <h1 className="title">{content.productsPage.title}</h1>
          </div>

          <div className={style["main__content"]}>
            <div className={style.filterBtn}>
              <Button
                type={"button"}
                className={style["filterBtn__button"]}
                content={content.productsPage.filter}
                feedbackClick={(e) => {
                  setClasses(true);
                }}
              />
            </div>
            <div
              className={classes ? `${style["filterBlock-wrapper"]}` : ""}
              onClick={(e) => {
                e.stopPropagation();
                // Close navigation
                if (classes) {
                  setClasses(false);
                }
              }}
            >
              <div
                className={
                  classes
                    ? style["filterBlock-wrapper-close"]
                    : style["filterBlock-wrapper-close-none"]
                }
              >
                <svg className="icon icon-close icon-close--modal">
                  <use xlinkHref="#icon-close"></use>
                </svg>
              </div>
            </div>
            <div
              className={
                classes
                  ? `${style.filterBlock} ${style.open}`
                  : style.filterBlock
              }
            >
              <Button
                type={"button"}
                className={
                  active[0].standart
                    ? `${style.buttonMenu} ${style.active}`
                    : style.buttonMenu
                }
                content={content.buttonsContent.btnAllCategories}
                svgFirst={btnsSvgContent.categories}
                feedbackClick={(e) => {
                  removeStyles(e);
                  setProducts(allProducts());
                  active[0].standart = true;
                  scrollUp();
                  setClasses(false);
                }}
              />
              {content.productsHome.category.map((item, index) => (
                <Button
                  key={Date.now() + index}
                  type={"button"}
                  className={
                    active[1][index]
                      ? `${style.buttonMenu} ${style.active}`
                      : style.buttonMenu
                  }
                  content={item}
                  svgFirst={categoriesSvg[index]}
                  feedbackClick={(e) => {
                    removeStyles(e);
                    setProducts(getCategory(index));
                    active[1][index] = true;
                    active[0].standart = false;
                    scrollUp();
                    setClasses(false);
                  }}
                />
              ))}
            </div>
            <div className={style.content}>{products}</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Products;
