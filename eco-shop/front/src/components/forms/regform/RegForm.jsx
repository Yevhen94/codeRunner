import React, { useState, useEffect, useContext } from "react";
import { Formik } from "formik";
import axios from "axios";
import Input from "../../../elements/input/Input";
import Button from "../../../elements/button/Button";
import LangContext from "../../../context/Context";
import { UserIconInput } from "../../../variables/materialIcons";
import { EyeIcon } from "../../../variables/materialIcons";
import { EmailIcon } from "../../../variables/materialIcons";
import { PhoneIconInput } from "../../../variables/materialIcons";
import { useNavigate } from "react-router-dom";
import "./regform.scss";

const RegForm = () => {
  const { content, setName, setWelcomeShow } = useContext(LangContext);
  const [styleRotate, setStyleRotate] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [changeType, setChangeType] = useState({
    password: false,
    confirmPassword: false,
  });
  const navigate = useNavigate();

  // Redirect to home page after SUCCESS
  useEffect(() => {
    const changeRedirect = () => {
      if (redirect) {
        navigate("/");
      }
    };
    changeRedirect();
  }, [redirect]);

  // Show rotate icon
  const svgRotate = {
    className: `icon icon-rotate ${styleRotate ? "icon-rotate--visible" : ""}`,
    href: "#icon-rotate",
  };

  const [message, setMessage] = useState("");

  const [classes, setClasses] = useState({
    userName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [eventTrue, setEventTrue] = useState(false);

  const baseURL = "https://final-exammen.herokuapp.com/auth/registration";
  const formValues = {
    userName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
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
      if (!values.email) {
        errors.email = content.errors.requiredField;
        classes.email = "form-error";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = content.errors.invalidEmail;
        classes.email = "form-error";
      } else {
        classes.email = "";
      }
      if (!values.phone) {
        errors.phone = content.errors.requiredField;
        classes.phone = "form-error";
      } else {
        classes.phone = "";
      }
      if (!values.password) {
        errors.password = content.errors.requiredField;
        classes.password = "form-error";
      } else if (values.password.length < 4 || values.password.length > 10) {
        errors.password = content.errors.passwordValid;
        setClasses({ ...classes, password: "form-error" });
      } else {
        classes.password = "";
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = content.errors.requiredField;
        classes.confirmPassword = "form-error";
      } else {
        if (values.password !== values.confirmPassword) {
          errors.confirmPassword = content.errors.passwordEqual;
          classes.password = "form-error";
          classes.confirmPassword = "form-error";
        } else {
          classes.password = "";
          classes.confirmPassword = "";
        }
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
      setStyleRotate(true);
      setRedirect(false);
    }, 400);
    const headers = new Headers();
    await axios
      .post(baseURL, values, headers)
      .then((res) => {
        if (res.status === 200) {
          setWelcomeShow(true);
          setName(res.data.user.userName);
          setTimeout(() => {
            setWelcomeShow(false);
            setRedirect(true);
          }, 2000);
          resetForm();
        }
        setStyleRotate(false);
        setSubmitting(false);
      })
      .catch((error) => {
        setStyleRotate(false);
        const errorRes = error.response;
        setMessage(errorRes.data.message);
      });
  };

  return (
    <>
      <div className="reg-title">
        <h2 className="title">{content.accountPageContent.regTitle}</h2>
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
          <form onSubmit={handleSubmit} className="reg-form">
            <p className="form-error__text">{message}</p>
            <div className={`reg-form__input ${classes.userName}`}>
              <label>
                <Input
                  placeholder={content.inputsContent.placeholderName}
                  onChange={handleChange}
                  value={values.userName}
                  onBlur={handleBlur}
                  className={"input"}
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
            <div className={`reg-form__input ${classes.email}`}>
              <label>
                <Input
                  placeholder={content.inputsContent.placeholderEmail}
                  onChange={handleChange}
                  value={values.email}
                  className={"input"}
                  onBlur={handleBlur}
                  name={"email"}
                  type={"email"}
                />
              </label>
              <div className="input-icon">
                <EmailIcon />
              </div>
            </div>
            <p className="form-error__text">
              {errors.email && touched.email && errors.email}
            </p>
            <div className={`reg-form__input ${classes.phone}`}>
              <label>
                <Input
                  placeholder={content.inputsContent.placeholderPhone}
                  onChange={handleChange}
                  value={values.phone}
                  className={"input"}
                  onBlur={handleBlur}
                  name={"phone"}
                  type={"tel"}
                />
              </label>
              <div className="input-icon">
                <PhoneIconInput />
              </div>
            </div>
            <p className="form-error__text">
              {errors.phone && touched.phone && errors.phone}
            </p>
            <div className={`reg-form__input ${classes.password}`}>
              <label>
                <Input
                  placeholder={content.inputsContent.placeholderReg}
                  type={!changeType.password ? "password" : "text"}
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                  className={"input"}
                  name={"password"}
                />
              </label>
              <div
                className="change-type-input"
                onMouseDown={() =>
                  setChangeType({ ...changeType, password: true })
                }
                onMouseUp={() =>
                  setChangeType({ ...changeType, password: false })
                }
              >
                <EyeIcon />
              </div>
            </div>
            <p className="form-error__text">
              {errors.password && touched.password && errors.password}
            </p>
            <div className={`reg-form__input ${classes.confirmPassword}`}>
              <label>
                <Input
                  placeholder={content.inputsContent.placeholderConfirm}
                  type={!changeType.confirmPassword ? "password" : "text"}
                  value={values.confirmPassword}
                  name={"confirmPassword"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={"input"}
                />
              </label>
              <div
                className="change-type-input"
                onMouseDown={() =>
                  setChangeType({ ...changeType, confirmPassword: true })
                }
                onMouseUp={() =>
                  setChangeType({ ...changeType, confirmPassword: false })
                }
              >
                <EyeIcon />
              </div>
            </div>
            <p className="form-error__text">
              {errors.confirmPassword &&
                touched.confirmPassword &&
                errors.confirmPassword}
            </p>

            <Button
              feedbackClick={() => setEventTrue(true)}
              content={content.buttonsContent.btnReg}
              className={"button button--login"}
              disabled={isSubmitting}
              type={"submit"}
              svg={svgRotate}
            />
          </form>
        )}
      </Formik>
    </>
  );
};

export default RegForm;
