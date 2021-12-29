import React, { useState, useContext } from "react";
import { scrollUp } from "../../variables/mainFunctions";
import LoginForm from "../../components/forms/logform/LoginForm";
import RegForm from "../../components/forms/regform/RegForm";
import LangContext from "../../context/Context";
import styles from "./account.module.scss";

const Account = () => {
  const { content } = useContext(LangContext);

  const [contentTag, setContentTag] = useState(true);
  return (
    <main className={styles["main"]}>
      <div className={styles["main__wrapper"]}>
        {contentTag ? <RegForm /> : <LoginForm />}
        <p
          className={styles["paragraph"]}
          onClick={() => {
            setContentTag(!contentTag);
            scrollUp();
          }}
        >
          {contentTag
            ? content.accountPageContent.regLink
            : content.accountPageContent.loginLink}
        </p>
      </div>
    </main>
  );
};

export default Account;
