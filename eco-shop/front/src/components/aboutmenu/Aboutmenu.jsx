import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { scrollUp } from "../../variables/mainFunctions";
import { BackArrowIcon } from "../../variables/materialIcons";
import LangContext from "../../context/Context";
import style from "./aboutmenu.module.scss";

const AboutMenu = ({
  aboutMenuOpen,
  aboutMenuClose,
  dropClose,
  visibleNavigation,
  burgerOpen,
}) => {
  const { content } = useContext(LangContext);

  const [pointerStyle, setPointerStyle] = useState({ pointerEvents: "auto" });

  // Change pointer-events style when dropdown menu open
  const changeStyles = () => {
    if (aboutMenuOpen) {
      setPointerStyle({ pointerEvents: "none" });
    }
    setTimeout(() => {
      setPointerStyle({ pointerEvents: "auto" });
    }, 2000);
  };

  // Close about menu when burger close
  useEffect(() => {
    if (!burgerOpen) {
      aboutMenuClose(false);
      dropClose(false);
    }
  }, [burgerOpen]);

  useEffect(() => {
    changeStyles();
  }, [aboutMenuOpen]);
  return (
    <>
      <ul
        className={`${style.aboutMenu} ${aboutMenuOpen ? "menu-visible" : ""}`}
        onClick={() => scrollUp()}
        style={pointerStyle}
      >
        <li
          className={style.aboutMenuBack}
          onClick={(e) => {
            e.stopPropagation();
            // Close about menu when click to arrow icon
            aboutMenuClose(false);
          }}
        >
          <BackArrowIcon />
        </li>
        <li
          className={style.aboutMenuItem}
          onClick={(e) => {
            e.stopPropagation();
            // Close navigation menu
            visibleNavigation(false);
            // close about menu
            aboutMenuClose(false);
            // Close dropdown menu
            dropClose(false);
          }}
        >
          <span className={style.aboutMenuLine}></span>
          <Link className="link" to="/about">
            {content.aboutmenu.about}
          </Link>
        </li>
        <li
          className={style.aboutMenuItem}
          onClick={(e) => {
            e.stopPropagation();
            // Close navigation menu
            visibleNavigation(false);
            // close about menu
            aboutMenuClose(false);
            // Close dropdown menu
            dropClose(false);
          }}
        >
          <span className={style.aboutMenuLine}></span>
          <Link className="link" to="/account">
            {content.aboutmenu.account}
          </Link>
        </li>
        <li
          className={style.aboutMenuItem}
          onClick={(e) => {
            e.stopPropagation();
            // Close navigation menu
            visibleNavigation(false);
            // close about menu
            aboutMenuClose(false);
            // Close dropdown menu
            dropClose(false);
          }}
        >
          <span className={style.aboutMenuLine}></span>
          <Link className="link" to="/faq">
            {content.aboutmenu.questions}
          </Link>
        </li>
        <li
          className={style.aboutMenuItem}
          onClick={(e) => {
            e.stopPropagation();
            // Close navigation menu
            visibleNavigation(false);
            // close about menu
            aboutMenuClose(false);
            // Close dropdown menu
            dropClose(false);
          }}
        >
          <span className={style.aboutMenuLine}></span>
          <Link className="link" to="/delivery">
            {content.aboutmenu.delivery}
          </Link>
        </li>
      </ul>
    </>
  );
};

export default AboutMenu;
