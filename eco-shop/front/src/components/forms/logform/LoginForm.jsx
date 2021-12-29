import React, { useState, useContext, useEffect } from "react";
import "./loginform.scss";
import { Formik } from "formik";
import axios from "axios";
import Input from "../../../elements/input/Input";
import Button from "../../../elements/button/Button";
import { useNavigate } from "react-router-dom";
import { UserIconInput } from "../../../variables/materialIcons";
import { EyeIcon } from "../../../variables/materialIcons";
import LangContext from "../../../context/Context";

const LoginForm = ({ loginClose }) => {
  const { content, setWelcomeShow, setName, setRole } = useContext(LangContext);
  const [redirect, setRedirect] = useState(false);
  const [changeType, setChangeType] = useState(false);
  const navigate = useNavigate();

  const baseURL = "https://final-exammen.herokuapp.com/auth/login";
  const [message, setMessage] = useState("");
  const [styleRotate, setStyleRotate] = useState(false);
  const [eventTrue, setEventTrue] = useState(false);
  const [classes, setClasses] = useState({
    userName: "",
    password: "",
  });

  useEffect(() => {
    const changeRedirect = () => {
      if (redirect) {
        navigate("/");
      }
    };
    changeRedirect();
  }, [redirect]);

  const svgRotate = {
    className: `icon icon-rotate ${styleRotate ? "icon-rotate--visible" : ""}`,
    href: "#icon-rotate",
  };

  const formValues = {
    userName: "",
    password: "",
  };

  const validateForm = (values) => {
    const errors = {};
    if (eventTrue) {
      if (!values.userName) {
        errors.userName = content.errors.requiredField;
        classes.userName = "form-error";
      } else {
        classes.userName = "";
      }
      if (!values.password) {
        errors.password = content.errors.requiredField;
        classes.password = "form-error";
      } else {
        classes.password = "";
      }
      return errors;
    }
  };

  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    setTimeout(() => {
      setSubmitting(true);
    }, 400);
    const headers = new Headers();
    setStyleRotate(true);
    await axios
      .post(baseURL, values, headers)
      .then((res) => {
        if (res.status === 200) {
          loginClose(false);
          setWelcomeShow(true);
          setTimeout(() => {
            setWelcomeShow(false);
            setRedirect(true);
          }, 2000);
          setName(res.data.userName);
        }
        resetForm();
        setSubmitting(false);
        setStyleRotate(false);
        setRole(res.data.roles[0]);
      })
      .catch((error) => {
        setStyleRotate(false);
        const errorRes = error.response;
        setMessage(errorRes.data.message);
      });
  };

  return (
    <>
      <div className="login-title">
        <h3 className="title">{content.accountPageContent.loginTitle}</h3>
      </div>
      <Formik
        initialValues={formValues}
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
          <form onSubmit={handleSubmit} className="login-form">
            <p className="form-error__text">{message}</p>
            <div className={`login-form__input ${classes.userName}`}>
              <label>
                <Input
                  placeholder={content.inputsContent.placeholderName}
                  onChange={handleChange}
                  value={values.userName}
                  className={"input"}
                  onBlur={handleBlur}
                  name={"userName"}
                  type={"text"}
                />
              </label>
              <div className="input-icon">
                <UserIconInput />
              </div>
            </div>
            <p className="form-error__text">
              {errors.userName && touched.userName && errors.userName}
            </p>
            <div className={`login-form__input ${classes.password}`}>
              <label>
                <Input
                  placeholder={content.inputsContent.passwordPlaceholder}
                  type={!changeType ? "password" : "text"}
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                  className={"input"}
                  name={"password"}
                />
              </label>
              <div
                className="change-type-input"
                onMouseDown={() => setChangeType(true)}
                onMouseUp={() => setChangeType(false)}
              >
                <EyeIcon />
              </div>
            </div>

            <p className="form-error__text">
              {errors.password && touched.password && errors.password}
            </p>
            <Button
              feedbackClick={() => setEventTrue(true)}
              content={content.buttonsContent.btnLogin}
              className={"button button--login"}
              disabled={isSubmitting}
              svg={svgRotate}
              type={"submit"}
            />
          </form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
