import React, { useContext } from "react";
import LangContext from "../../context/Context";
import style from "./delivery.module.scss";

const Delivery = () => {
  const { content } = useContext(LangContext);
  return (
    <main className={`${style.main ? style.main : ""} block-size`}>
      <div className={style.mainWrapper}>
        <div className={style.mainTitle}>
          <h1 className={style.title}>{content.deliveryPage.title}</h1>
        </div>
        <div className={style.content}>
          <div className={style.reserve}>
            <div className={style.contentSubtitle}>
              <h3 className={style.subtitle}>
                {content.deliveryPage.reservSubtitle}
              </h3>
            </div>
            <div className={style.contentBlock}>
              <p className={style.paragraph}>
                {content.deliveryPage.reservContent.first}
              </p>
              <p className={style.paragraph}>
                {content.deliveryPage.reservContent.second}
              </p>
              <p className={style.paragraph}>
                {content.deliveryPage.reservContent.third}
              </p>
              <p className={style.paragraph}>
                {content.deliveryPage.reservContent.fourth}
              </p>
            </div>
          </div>
          <div className={style.delivery}>
            <div className={style.contentSubtitle}>
              <h3 className={style.subtitle}>
                {content.deliveryPage.deliberySubtitle}
              </h3>
            </div>
            <div className={style.contentBlock}>
              <p className={style.paragraph}>
                {content.deliveryPage.deliveryContent.first}
              </p>
              <div className={style.deliveryConditions}>
                <h5 className={style["subtitle-small"]}>
                  {content.deliveryPage.deliveryContent.subtitle}
                </h5>
                <ul className={style.deliveryList}>
                  <li className={style.deliveryItem}>
                    {content.deliveryPage.deliveryContent.content.first}
                  </li>
                  <li className={style.deliveryItem}>
                    {content.deliveryPage.deliveryContent.content.second}
                  </li>
                </ul>
              </div>
              <p className={style.paragraph}>
                {content.deliveryPage.deliveryContent.second}
              </p>
            </div>
          </div>
          <div className={style.payment}>
            <div className={style.contentSubtitle}>
              <h3 className={style.subtitle}>
                {content.deliveryPage.paySubtitle}
              </h3>
            </div>
            <div className={style.contentBlock}>
              <p className={style.paragraph}>
                {content.deliveryPage.payContent.firstBlock}
              </p>
              <div className={style.paymentCondition}>
                <h5 className={style["subtitle-small"]}>
                  {content.deliveryPage.payContent.content.title}
                </h5>
                <p className={style.paragraph}>
                  {content.deliveryPage.payContent.content.contentBlock}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Delivery;
