import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../dropdown/Dropdown";
import style from "./navigation.module.scss";
import Lang from "../../elements/lang/Lang";
import { ArrowRight } from "../../variables/materialIcons";
import LangContext from "../../context/Context";

const Navigation = ({ burgerOpen, visibleNavigation }) => {
  const { content } = useContext(LangContext);

  const [navClasses, setNavClasses] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropClose = (value) => {
    setDropdownOpen(value);
  };

  useEffect(() => {
    const changeNavClasses = () => {
      burgerOpen ? setNavClasses(style.navActive) : setNavClasses("");
    };
    changeNavClasses();
  }, [burgerOpen]);

  return (
    <>
      <div
        className={burgerOpen ? style.wrapper : ""}
        onClick={(e) => {
          e.stopPropagation();
          // Close navigation
          if (burgerOpen) {
            visibleNavigation(false);
          }
        }}
      ></div>
      <nav className={`${style.navigation} ${navClasses}`}>
        <ul
          className={`${style.navigationList} ${
            dropdownOpen ? "menu-hidden" : "menu-visible"
          }`}
        >
          <li
            className={style.navigationItem}
            onClick={(e) => {
              e.stopPropagation();
              // Close navigation
              visibleNavigation(false);
            }}
          >
            <Link className="link" to="/">
              {content.navigation.home}
            </Link>
          </li>
          <li
            className={style.navigationItem}
            onClick={(e) => {
              e.stopPropagation();
              // Open dropdown menu
              if (burgerOpen) {
                setDropdownOpen(true);
              }
            }}
          >
            <span className="link-button">{content.navigation.shop}</span>
            <div className={style.arrow}>
              <ArrowRight />
            </div>
            <div
              className={`${style.navigationContent} ${
                dropdownOpen ? style["navigationContent--active"] : ""
              }`}
            >
              <Dropdown
                dropdownOpen={dropdownOpen}
                dropClose={dropClose}
                visibleNavigation={visibleNavigation}
                burgerOpen={burgerOpen}
              />
            </div>
          </li>
          <li
            className={style.navigationItem}
            onClick={(e) => {
              e.stopPropagation();
              // Close navigation
              visibleNavigation(false);
            }}
          >
            <Link className="link" to="/blog">
              {content.navigation.blog}
            </Link>
          </li>
          <li
            className={style.navigationItem}
            onClick={(e) => {
              e.stopPropagation();
              // Close navigation
              visibleNavigation(false);
            }}
          >
            <Link className="link" to="/contacts">
              {content.navigation.contacts}
            </Link>
          </li>
        </ul>
        {burgerOpen ? (
          <div className={style.navigationButtons}>
            <div className={style.navigationButtonsLang}>
              <Lang />
            </div>
          </div>
        ) : null}
      </nav>
    </>
  );
};

export default Navigation;
