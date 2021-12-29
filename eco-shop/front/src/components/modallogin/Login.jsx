import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../forms/logform/LoginForm";
import { scrollUp } from "../../variables/mainFunctions";
import LangContext from "../../context/Context";

import "./login.scss";

const Login = ({ active, setActive }) => {
  const { content } = useContext(LangContext);

  useEffect(() => {
    const closeModalKey = (e) => {
      if (e.keyCode === 27) {
        setActive({ ...active, login: false });
      }
    };
    window.addEventListener("keydown", closeModalKey);
    return () => window.removeEventListener("keydown", closeModalKey);
  });

  const loginClose = (value) => {
    setActive({ ...active, login: value });
  };
  return (
    <div
      className={active.login ? "login open" : "login"}
      onMouseDown={() => setActive({ ...active, login: false })}
    >
      <div className="login__wrapper" onMouseDown={(e) => e.stopPropagation()}>
        <div
          className="login__close"
          onClick={() => setActive({ ...active, login: false })}
        >
          <svg className="icon icon-close">
            <use xlinkHref="#icon-close"></use>
          </svg>
        </div>

        <LoginForm loginClose={loginClose} />
        <p
          className="login__link"
          onClick={(e) => {
            e.stopPropagation();
            setActive({ ...active, login: false });
            scrollUp();
          }}
        >
          <Link className="link" to="/account">
            {content.accountPageContent.loginLink}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
