import React, { useState, useContext } from "react";
import AccordionItem from "../../elements/accordion/Accordion";
import { ProductIcon } from "../../variables/materialIcons";
import { NewHomeIcon } from "../../variables/materialIcons";
import { DeliveryIcon } from "../../variables/materialIcons";
import LangContext from "../../context/Context";
import style from "./faq.module.scss";

const Faq = () => {
  const { content } = useContext(LangContext);
  const [expanded, setExpanded] = useState(false);
  const [classNames, setClassNames] = useState({
    common: true,
    products: false,
    delivery: false,
  });

  const titleStyles = {
    width: "90%",
    fontWeight: "bold",
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="container">
      <main className={`${style.main} block-size`}>
        <div className={style.mainWrapper}>
          <h1 className={style.title}>{content.faqPage.mainTitle}</h1>
          <div className={style.titlesBlock}>
            <div
              className={`${style["title-common"]} ${
                classNames.common ? style.activeTitle : ""
              }`}
              onClick={() =>
                setClassNames({
                  ...classNames,
                  common: true,
                  products: false,
                  delivery: false,
                })
              }
            >
              <NewHomeIcon />
              <span className={style["title-common-text"]}>
                {content.faqPage.commonTitle}
              </span>
            </div>
            <div
              className={`${style["title-products"]} ${
                classNames.products ? style.activeTitle : ""
              }`}
              onClick={() =>
                setClassNames({
                  ...classNames,
                  common: false,
                  products: true,
                  delivery: false,
                })
              }
            >
              <ProductIcon />
              <span className={style["title-products-text"]}>
                {content.faqPage.productsTitle}
              </span>
            </div>
            <div
              className={`${style["title-delivery"]} ${
                classNames.delivery ? style.activeTitle : ""
              }`}
              onClick={() =>
                setClassNames({
                  ...classNames,
                  common: false,
                  products: false,
                  delivery: true,
                })
              }
            >
              <DeliveryIcon />
              <span className={style["title-delivery-text"]}>
                {content.faqPage.deliveryTitle}
              </span>
            </div>
          </div>
          <div className={style.contentBlock}>
            <div
              className={`${style["questions-common"]} ${
                classNames.common ? style.activeContent : ""
              }`}
            >
              {content.faqPage.content.common.map((item, index) => (
                <AccordionItem
                  expanded={expanded === `panel${index + 1}`}
                  onChange={handleChange(`panel${index + 1}`)}
                  aria-controls={`panel${index + 1}bh-content`}
                  id={`panel${index + 1}bh-header`}
                  titleStyle={titleStyles}
                  title={item.title}
                  content={item.content}
                  key={Date.now + index}
                />
              ))}
            </div>
            <div
              className={`${style["questions-products"]} ${
                classNames.products ? style.activeContent : ""
              }`}
            >
              {content.faqPage.content.products.map((item, index) => (
                <AccordionItem
                  expanded={expanded === `panel${index + 1}`}
                  onChange={handleChange(`panel${index + 1}`)}
                  aria-controls={`panel${index + 1}bh-content`}
                  id={`panel${index + 1}bh-header`}
                  titleStyle={titleStyles}
                  title={item.title}
                  content={item.content}
                  key={Date.now + index}
                />
              ))}
            </div>
            <div
              className={`${style["questions-delivery"]} ${
                classNames.delivery ? style.activeContent : ""
              }`}
            >
              {content.faqPage.content.delivery.map((item, index) => (
                <AccordionItem
                  expanded={expanded === `panel${index + 1}`}
                  onChange={handleChange(`panel${index + 1}`)}
                  aria-controls={`panel${index + 1}bh-content`}
                  id={`panel${index + 1}bh-header`}
                  titleStyle={titleStyles}
                  title={item.title}
                  content={item.content}
                  key={Date.now + index}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Faq;
