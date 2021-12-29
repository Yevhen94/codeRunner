import React, { useEffect, useContext } from "react";
import Button from "../../elements/button/Button";
import style from "./modallogout.module.scss";
import LangContext from "../../context/Context";
import { SadnessFace } from "../../variables/materialIcons";

const ModalLogOut = ({ active, setActive }) => {
  const { setName, content, setRole } = useContext(LangContext);

  useEffect(() => {
    const closeModalKey = (e) => {
      if (e.keyCode === 27) {
        setActive({ ...active, logout: false });
      }
    };
    window.addEventListener("keydown", closeModalKey);
    return () => window.removeEventListener("keydown", closeModalKey);
  });

  return (
    <>
      <div
        className={
          active.logout ? `${style.logout} ${style.open}` : style.logout
        }
        onMouseDown={() => setActive({ ...active, logout: false })}
      >
        <div className={style.wrapper} onMouseDown={(e) => e.stopPropagation()}>
          <div
            className={style.logoutClose}
            onClick={() => setActive({ ...active, logout: false })}
          >
            <svg className="icon icon-close">
              <use xlinkHref="#icon-close"></use>
            </svg>
          </div>
          <p className={style.paragraph}>
            {content.accountPageContent.logOutText}
          </p>
          <div className={style.icon}>
            <SadnessFace />
          </div>
          <div className={style["buttons-block"]}>
            <Button
              type={"button"}
              content={content.accountPageContent.logOutConfirm}
              feedbackClick={() => {
                setName("");
                setRole("");
                localStorage.removeItem("user");
                setActive({ ...active, logout: false });
              }}
              className={"button"}
            />
            <Button
              content={content.accountPageContent.logOutClose}
              feedbackClick={() => {
                setActive({ ...active, logout: false });
              }}
              className={"button"}
              type={"button"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalLogOut;
