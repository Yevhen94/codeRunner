import React from "react";
import "./icons.scss";

const Icons = (params) => {
  return (
    <>
      <svg className={params.className}>
        <use xlinkHref={params.href}></use>
      </svg>
    </>
  );
};

export default Icons;
