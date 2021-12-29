import React from "react";
import Icons from "../../../../elements/icons/Icons";
import style from "./benefits.module.scss";

const Benefits = () => {
  return (
    <>
      <div className={style.benefits}>
        <div className={style.delivery}>
          <div className={style.titleBlock}>
            <Icons className={"icon icon-delivery"} href={"#icon-delivery"} />
            <h4 className={style.subtitle}>Fast Delivery</h4>
          </div>
          <p className={style.content}>
            Guarantees fast delivery all over Ukraine.
          </p>
        </div>
        <div className={style.support}>
          <div className={style.titleBlock}>
            <Icons className={"icon icon-support"} href={"#icon-support"} />
            <h4 className={style.subtitle}>Full Support</h4>
          </div>
          <p className={style.content}>24/7 support for our customers</p>
        </div>
        <div className={style.product}>
          <div className={style.titleBlock}>
            <Icons className={"icon icon-plant"} href={"#icon-plant"} />
            <h4 className={style.subtitle}>Only fresh products</h4>
          </div>
          <p className={style.content}>24/7 support for our customers</p>
        </div>
        <div className={style.cash}>
          <div className={style.titleBlock}>
            <Icons className={"icon icon-cash"} href={"#icon-cash"} />
            <h4 className={style.subtitle}>Affordable prices</h4>
          </div>
          <p className={style.content}>24/7 support for our customers</p>
        </div>
      </div>
    </>
  );
};

export default Benefits;
