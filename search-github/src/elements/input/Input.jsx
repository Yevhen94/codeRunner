import React from "react";
import "./input.scss";

const Input = (props) => {
  return (
    <>
      <input
        type={props.type}
        name={props.name}
        className={props.className}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
};

export default Input;
