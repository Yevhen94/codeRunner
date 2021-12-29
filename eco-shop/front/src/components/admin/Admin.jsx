import React, { useState, useContext, useEffect } from "react";
import { Formik } from "formik";
import axios from "axios";
import Input from "../../elements/input/Input";
import Button from "../../elements/button/Button";
import LangContext from "../../context/Context";
import style from "./admin.module.scss";

const Admin = ({ active, setActive }) => {
  const { content } = useContext(LangContext);
  const [url, setUrl] = useState(null);
  const [file, setFile] = useState();
  const baseURL = "http://localhost:5000/uploadImage";
  const [message, setMessage] = useState("");
  const [classes, setClasses] = useState({
    title: "",
    content: "",
  });

  const formValues = {
    title: "",
    content: "",
  };

  const validateForm = (values) => {
    const errors = {};
    if (!values.userName) {
      errors.title = content.errors.requiredField;
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
  };
  // let data = new FormData();
  // const handleImageUpload = async (event) => {
  //   const files = event.target.files;
  //   const formData = new FormData();
  //   formData.append("profileFile", files[0]);

  //   await fetch(baseURL, {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data.path);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };
  // const handleFileChange = (e) => {
  //   let image = e.target.files[0];
  //   console.log(image);
  //   let reader = new FileReader();
  //   reader.onloadend = (e) => {
  //     setUrl(e.target.result);
  //   };
  //   reader.readAsDataURL(image);
  //   // data.append("file", image);
  //   setFile(image);

  //   // fetch(baseURL, {
  //   //   method: "POST",
  //   //   body: e.target.files[0],
  //   // }).then((res) => console.log(res));
  // };

  // // const targetFile = (e)

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   // const data = new FormData();
  //   // console.log(file);
  //   // data.append("file", file);
  //   // data.append("url", url);
  //   console.log(file.name);
  //   console.log(url);
  //   // console.log(data);
  //   let profileFile = JSON.stringify(file);
  //   console.log(profileFile);
  //   const headers = new Headers();
  //   // headers.append("content-type", "multipart/form-data");
  //   // await axios.post(baseURL, headers, file).then((res) => console.log(res)).catch(error);
  //   fetch(baseURL, {
  //     method: "POST",
  //     headers: headers,
  //     body: file,
  //   })
  //     .then((response) => console.log(response))
  //     .catch((e) => console.log(e));
  // };

  useEffect(() => {
    const closeModalKey = (e) => {
      if (e.keyCode === 27) {
        setActive({ ...active, adminPanel: false });
      }
    };
    window.addEventListener("keydown", closeModalKey);
  });

  return (
    <>
      <div
        className={
          active.adminPanel ? `${style.admin} ${style.open}` : style.admin
        }
        onMouseDown={() => setActive({ ...active, adminPanel: false })}
      >
        <div
          className={style["admin__wrapper"]}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div
            className={style["admin__close"]}
            onClick={() => setActive({ ...active, adminPanel: false })}
          >
            <svg className="icon icon-close">
              <use xlinkHref="#icon-close"></use>
            </svg>
          </div>
          <div className={style["admin__image-block"]}>
            <form
              className={style["admin__image-form"]}
              encType="multipart/form-data"
            >
              <label className={style.customInput}>
                <span>Enter file</span>
                <input
                  type="file"
                  // id="newFile"
                  // onChange={(e) => handleImageUpload(e)}
                  className={style.imgInput}
                />
              </label>
              <Button
                type={"button"}
                className={style.imgButton}
                content={"Upload"}
                // feedbackClick={(e) => {
                //   onSubmit(e);
                // }}
              />
            </form>
            <div className={style["admin__image-block__img"]}>
              <img src={url} alt="!!!!" className="img" />
            </div>
          </div>
          <div className={style["admin__text-block"]}>
            <Formik
              initialValues={formValues}
              validate={(values) => validateForm(values)}
              // onSubmit={onSubmit}
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
                <form onSubmit={handleSubmit} className={style.post}>
                  <p className="form-error__text">{message}</p>
                  <div className={style["post__title"]}>
                    <Input
                      placeholder={"Enter title post here"}
                      onChange={handleChange}
                      value={values.title}
                      className={"input"}
                      onBlur={handleBlur}
                      name={"userName"}
                      type={"text"}
                    />
                  </div>
                  <p className="form-error__text">
                    {errors.userName && touched.userName && errors.userName}
                  </p>
                  <div className={style["post__content"]}>
                    <textarea
                      placeholder={"Enter text post here"}
                      type={"text"}
                      onChange={handleChange}
                      defaultValue={values.content}
                      onBlur={handleBlur}
                      className={"input input--resize"}
                      name={"password"}
                    ></textarea>
                  </div>

                  <p className="form-error__text">
                    {errors.password && touched.password && errors.password}
                  </p>
                  <Button
                    content={"Send"}
                    className={style.buttonSubmit}
                    disabled={isSubmitting}
                    // svg={svgRotate}
                    type={"submit"}
                  />
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
