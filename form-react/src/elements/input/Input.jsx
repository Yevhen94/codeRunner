import React from "react";
import "./input.scss";

const Input = (props) => {
  return (
    <>
      <input
        type={props.type}
        className={props.className}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        id={props.id}
      />
    </>
  );
};

export default Input;
