import React from "react";
import "./button.scss";

const Button = (props) => {
  return (
    <>
      <button
        className={props.className}
        type={props.type ? props.type : "button"}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.content ? <span>{props.content}</span> : null}
      </button>
    </>
  );
};

export default Button;
