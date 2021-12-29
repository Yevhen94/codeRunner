import React, { useContext } from "react";
import Button from "../button/Button";
import LangContext from "../../context/Context";

const OpenModalLogin = ({ openModalLogin }) => {
  const { content } = useContext(LangContext);

  return (
    <>
      <Button
        feedbackClick={() => openModalLogin(true)}
        content={content.buttonsContent.btnLogin}
        className={"button"}
        type={"button"}
      />
    </>
  );
};

export default OpenModalLogin;
