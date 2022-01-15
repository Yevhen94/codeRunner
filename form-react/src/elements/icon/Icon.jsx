import React from "react";
import "./icon.scss";

const Icon = (props) => {
  return (
    <>
      <svg className={props.svgClassName}>
        <use xlinkHref={props.svgHref}></use>
      </svg>
    </>
  );
};

export default Icon;
