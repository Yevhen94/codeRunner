import React, { useState } from "react";
import "./form.scss";

import { Formik } from "formik";
import Input from "../../elements/input/Input";
import Button from "../../elements/button/Button";
import Icon from "../../elements/icon/Icon";

const Form = () => {
  const [classes, setClasses] = useState({
    email: "",
    password: "",
  });
  const [changeType, setChangeType] = useState(false);

  const formValues = {
    email: "",
    password: "",
  };

  const validatePassword = (value) => {
    if (!value) {
      setClasses({ ...classes, password: "error" });
    } else {
      setClasses({ ...classes, password: "success" });
    }
  };

  const validateEmail = (values) => {
    if (!values.email) {
      setClasses({ ...classes, email: "error" });
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      setClasses({ ...classes, email: "error" });
    } else {
      setClasses({ ...classes, email: "success" });
    }
  };

  const onFocus = (e) => {
    if (e.target.name === "email") {
      setClasses({ ...classes, email: "focus" });
    } else if (e.target.name === "password") {
      setClasses({ ...classes, password: "focus" });
    }
  };

  const onBlur = (e, values) => {
    if (!values.email) {
      if (e.target.name === "email") {
        setClasses({ ...classes, email: "" });
      }
    }
    if (!values.password) {
      if (e.target.name === "password") {
        setClasses({ ...classes, password: "" });
      }
    }
  };

  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {};
  return (
    <>
      <Formik
        initialValues={formValues}
        validate={(values) => {
          validateEmail(values);
        }}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="form">
            <label htmlFor="email-field" className="form__input__text">
              <span>E-Mail or Username</span>
            </label>
            <div className={`form__input ${classes.email}`}>
              <div className="form__input__icon">
                <Icon
                  svgClassName={"icon icon-email"}
                  svgHref={"#icon-email"}
                />
              </div>
              <Input
                placeholder={"e.g.: elonmusk@mars.com "}
                onChange={handleChange}
                value={values.email}
                className={"input"}
                onBlur={(e) => onBlur(e, values)}
                name={"email"}
                type={"email"}
                id={"email-field"}
                onFocus={(e) => onFocus(e)}
              />
            </div>
            <label htmlFor="password-field" className="form__input__text">
              <span>Password</span>
            </label>
            <div className={`form__input ${classes.password}`}>
              <div
                className="form__input__icon"
                onMouseDown={() => setChangeType(true)}
                onMouseUp={() => setChangeType(false)}
              >
                <Icon svgClassName={"icon icon-lock"} svgHref={"#icon-lock"} />
              </div>
              <Input
                placeholder={"e.g.: X Æ A-12"}
                type={!changeType ? "password" : "text"}
                onChange={(e) => {
                  handleChange(e);
                  validatePassword(e.target.value);
                }}
                value={values.password}
                onBlur={(e) => onBlur(e, values)}
                className={"input"}
                name={"password"}
                onFocus={(e) => onFocus(e)}
                id={"password-field"}
              />
            </div>
            <Button
              onClick={(e) => {
                validatePassword(e.target.value);
                validateEmail(values);
              }}
              content={"Sign Up"}
              className={"button button--login"}
              disabled={isSubmitting}
              type={"submit"}
            />
          </form>
        )}
      </Formik>
    </>
  );
};

export default Form;
