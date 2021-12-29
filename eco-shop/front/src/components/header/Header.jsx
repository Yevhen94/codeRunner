import React, { useEffect, useState, useContext } from "react";
import style from "./header.module.scss";
import Navigation from "../navigation/Navigation";
import Logo from "../../elements/logo/Logo";
import Button from "../../elements/button/Button";
import Lang from "../../elements/lang/Lang";
import Login from "../modallogin/Login";
import Burger from "../../elements/burger/Burger";
import OpenModalLogin from "../../elements/openModalLogin/OpenModalLogin";
import { CartIcon } from "../../variables/materialIcons";
import { UserIcon } from "../../variables/materialIcons";
import { btnsSvgContent } from "../../variables/data";
import LangContext from "../../context/Context";
import ModalLogOut from "../modalLogOut/ModalLogOut";
import ModalWelcome from "../modalWelcome/ModalWelcome";
import ShopCart from "../shopcart/ShopCart";
import ScrollBtn from "../../elements/scrollBtn/scrollBtn";
import { AdminPanel } from "../../variables/materialIcons";
import Admin from "../admin/Admin";

const Header = () => {
  const { name, content, shopList, role } = useContext(LangContext);
  const [classesState, setClassesState] = useState({
    headerFixed: "",
  });
  const [modalShow, setModalShow] = useState({
    login: false,
    logout: false,
    cart: false,
    adminPanel: false,
  });
  const [burgerOpen, setBurgerOpen] = useState(false);

  const visibleNavigation = (value) => {
    setBurgerOpen(value);
  };

  useEffect(() => {
    const headerScroll = () => {
      window.pageYOffset >= 50
        ? setClassesState({ ...classesState, headerFixed: style.fixed })
        : setClassesState({ ...classesState, headerFixed: "" });
    };
    window.addEventListener("scroll", headerScroll);
    return () => window.removeEventListener("scroll", headerScroll);
  }, []);

  const openModalLogin = (value) => {
    setModalShow({ ...modalShow, login: value });
  };

  return (
    <header className={`${style.header} ${classesState.headerFixed}`}>
      <div className={style.headerWrapper}>
        <div className={style.headerLogo}>
          <Logo />
        </div>
        <Navigation
          burgerOpen={burgerOpen}
          openModalLogin={openModalLogin}
          visibleNavigation={visibleNavigation}
        />
        <div className={style.headerButtons}>
          <div className={style.headerSearch}>
            <Button
              className={"button button--search"}
              type={"button"}
              svg={btnsSvgContent.search}
            />
          </div>
          <div
            className={style.headerCart}
            onClick={() => setModalShow({ ...modalShow, cart: true })}
          >
            <CartIcon />
            <span className={style.headerCartCount}>{shopList.length}</span>
          </div>
          <div className={`${style.headerLogin}`}>
            {name ? (
              <div
                className={style.headerUserLogin}
                onClick={() => setModalShow({ ...modalShow, logout: true })}
              >
                <UserIcon />
                <span
                  className={style.name}
                  data-title={`${content.accountPageContent.userName}: ${name}`}
                >
                  {name}
                </span>
              </div>
            ) : (
              <OpenModalLogin openModalLogin={openModalLogin} />
            )}
          </div>

          <div className={style.headerLang}>
            <Lang />
          </div>
        </div>
        <Burger visibleNavigation={visibleNavigation} burgerOpen={burgerOpen} />
      </div>
      {role === "ADMIN" ? (
        <Button
          type={"button"}
          icon={<AdminPanel />}
          feedbackClick={() => setModalShow({ ...modalShow, adminPanel: true })}
          className={style.buttonAdmin}
        />
      ) : null}

      <Login active={modalShow} setActive={setModalShow} />
      <ModalLogOut active={modalShow} setActive={setModalShow} />
      <ModalWelcome />
      <ShopCart active={modalShow} setActive={setModalShow} />
      <Admin active={modalShow} setActive={setModalShow} />
      <ScrollBtn />
    </header>
  );
};

export default Header;
