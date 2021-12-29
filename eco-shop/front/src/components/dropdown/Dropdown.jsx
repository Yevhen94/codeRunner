import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import AboutMenu from "../aboutmenu/Aboutmenu";
import { BackArrowIcon } from "../../variables/materialIcons";
import { ArrowRight } from "../../variables/materialIcons";
import LangContext from "../../context/Context";
import style from "./dropdown.module.scss";

const Dropdown = ({
  dropdownOpen,
  dropClose,
  visibleNavigation,
  burgerOpen,
}) => {
  const { content } = useContext(LangContext);

  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [pointerStyle, setPointerStyle] = useState({ pointerEvents: "auto" });

  // Change pointer-events style when dropdown menu open
  const changeStyles = () => {
    if (dropdownOpen) {
      setPointerStyle({ pointerEvents: "none" });
    }
    setTimeout(() => {
      setPointerStyle({ pointerEvents: "auto" });
    }, 1000);
  };

  // Close dropdown menu when burger close
  useEffect(() => {
    if (!burgerOpen) {
      dropClose(false);
    }
  }, [burgerOpen]);

  useEffect(() => {
    changeStyles();
  }, [dropdownOpen]);

  const aboutMenuClose = (value) => {
    setAboutMenuOpen(value);
  };

  return (
    <>
      <ul
        className={`${style.dropdown} ${
          aboutMenuOpen ? "menu-hidden" : "menu-visible"
        }`}
        style={pointerStyle}
      >
        <li
          className={style.dropdownBack}
          onClick={(e) => {
            e.stopPropagation();
            // Close dropdown menu
            dropClose(false);
          }}
        >
          <BackArrowIcon />
        </li>
        <li
          className={style.dropdownItem}
          onClick={(e) => {
            e.stopPropagation();
            // Close navigation
            visibleNavigation(false);
            // Close dropdown menu
            dropClose(false);
          }}
        >
          <span className={style.dropdownLine}></span>
          <Link className="link" to="/products">
            {content.dropdown.products}
          </Link>
        </li>
        <li
          className={style.dropdownItem}
          onClick={() => {
            if (burgerOpen) {
              setAboutMenuOpen(true);
            }
          }}
        >
          <span className={style.dropdownLine}></span>
          <span className={style.linkButton}>{content.dropdown.company}</span>
          <div className={style.arrow}>
            <ArrowRight />
          </div>
          <div
            className={`${style["dropdown-content"]} ${
              aboutMenuOpen ? style["dropdown-content--active"] : ""
            }`}
          >
            <AboutMenu
              aboutMenuOpen={aboutMenuOpen}
              aboutMenuClose={aboutMenuClose}
              visibleNavigation={visibleNavigation}
              dropClose={dropClose}
              burgerOpen={burgerOpen}
            />
          </div>
        </li>
        <li
          className={style.dropdownItem}
          onClick={(e) => {
            e.stopPropagation();
            // Close navigation
            visibleNavigation(false);
            // Close dropdown menu
            dropClose(false);
          }}
        >
          <span className={style.dropdownLine}></span>
          <Link className="link" to="/news">
            {content.dropdown.news}
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Dropdown;
