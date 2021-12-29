import React from "react";
import "./input.scss";

const Input = (props) => {
  return (
    <>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className={props.className}
        onChange={props.onChange}
        onBlur={props.onBlur}
        onMouseDown={props.onMouseDown}
        value={props.value}
      />
    </>
  );
};

export default Input;
