import React from "react";
import Icons from "../icons/Icons";
import "./button.scss";

const Button = (props) => {
  return (
    <>
      <button
        style={props.style ? props.style : null}
        disabled={props.disabled ? props.disabled : null}
        className={props.className}
        type={props.type ? props.type : "button"}
        onClick={props.feedbackClick}
        onSubmit={props.onSubmit}
      >
        {props.icon ? props.icon : null}
        {props.svgFirst ? (
          <Icons
            className={props.svgFirst.className}
            href={props.svgFirst.href}
          />
        ) : null}
        {props.content ? (
          <span className="button__text">{props.content}</span>
        ) : null}
        {props.svg ? (
          <Icons className={props.svg.className} href={props.svg.href} />
        ) : null}
        {props.svgClassName ? props.svgClassName : null}
        {props.svgHref ? props.svgHref : null}
      </button>
    </>
  );
};

export default Button;
