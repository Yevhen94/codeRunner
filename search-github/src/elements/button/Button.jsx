import React from "react";
import "./button.scss";

const Button = (props) => {
  return (
    <>
      <button
        type={props.type ? props.type : null}
        className={props.className}
        onClick={props.onClick}
      >
        {props.content ? (
          <span className={props.textClassName}>{props.content}</span>
        ) : null}
        {props.icon ? (
          <svg className={props.icon.className}>
            <use xlinkHref={props.icon.href}></use>
          </svg>
        ) : null}
      </button>
    </>
  );
};

export default Button;
