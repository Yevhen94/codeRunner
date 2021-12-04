import React from 'react';
import './button.scss';

const Button = (props) => {
  return (
    <>
      <button
        type={props.type ? props.type : 'button'}
        disabled={props.disabled ? props.disabled : null}
        className={props.className}
        onSubmit={props.onSubmit}
        onClick={props.onClick}
      >
        {props.content ? <span>{props.content}</span> : null}
      </button>
    </>
  );
};

export default Button;
