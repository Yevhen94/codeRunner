import React, { useContext } from "react";
import style from "./modalwelcome.module.scss";
import LangContext from "../../context/Context";

const ModalWelcome = () => {
  const { welcomeShow } = useContext(LangContext);
  return (
    <>
      <div
        className={
          welcomeShow ? `${style.welcome} ${style.open}` : style.welcome
        }
      >
        <div className={style.wrapper}>
          <p className={style.paragraph}>WELCOME</p>
          <div className={style.redirecting}>
            <span className={style["redirecting__text"]}>
              Please wait, redirecting to Home page
            </span>
            <svg className="icon icon-loading">
              <use xlinkHref="#icon-loading"></use>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalWelcome;
