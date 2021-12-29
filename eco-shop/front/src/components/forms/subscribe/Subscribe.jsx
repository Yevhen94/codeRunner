import React, { useContext, useState } from "react";
import { Formik } from "formik";
import Input from "../../../elements/input/Input";
import Button from "../../../elements/button/Button";
import LangContext from "../../../context/Context";
import "./subscribe.scss";

const Subscribe = () => {
  const { content } = useContext(LangContext);
  const [message, setMessage] = useState("");
  const [classes, setClasses] = useState("");

  const validateForm = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = content.errors.requiredField;
      setClasses("form-error");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = content.errors.invalidEmail;
      setClasses("form-error");
    } else {
      setClasses("");
    }
    return errors;
  };

  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    setTimeout(() => {
      setSubmitting(true);
    }, 400);
  };

  return (
    <>
      <Formik
        initialValues={{ email: "" }}
        validate={(values) => validateForm(values)}
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
          <form onSubmit={handleSubmit} className="subscribe-form">
            <p className="form-error__text">{message}</p>
            <div className={`subscribe-form__wrapper`}>
              <Input
                placeholder={content.inputsContent.placeholderEmail}
                className={`input input--subscribe ${classes}`}
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
                name={"email"}
                type={"email"}
              />
              <Button
                type={"submit"}
                disabled={isSubmitting}
                content={content.buttonsContent.btnSubscribe}
                className={"button button--subscribe"}
              />
            </div>
            <p className="form-error__text">
              {errors.email && touched.email && errors.email}
            </p>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Subscribe;
