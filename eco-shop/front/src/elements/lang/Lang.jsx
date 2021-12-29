import React, { useContext } from "react";
import LangContext from "../../context/Context";
import Button from "../button/Button";
import "./lang.scss";

const Lang = () => {
  const { setLanguage, content } = useContext(LangContext);
  const dataLang = {
    ua: {
      type: "button",
      className: "button button--lang",
      content: "RU",
    },
    en: {},
  };
  return (
    <>
      <Button
        type={"button"}
        className={"button button--lang"}
        content={"EN"}
        feedbackClick={() => setLanguage("en")}
      />
      <span className="button__text">/</span>
      <Button
        type={"button"}
        className={"button button--lang"}
        content={"RU"}
        data={dataLang.ua}
        feedbackClick={() => setLanguage("ru")}
      />
    </>
  );
};

export default Lang;
