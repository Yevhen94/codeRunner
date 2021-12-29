import React from "react";
import Button from "../../../elements/button/Button";
import styles from "./favbutton.module.scss";

const FavButton = ({ showFavModal }) => {
  const icon = {
    className: "icon icon-like",
    href: "#icon-like",
  };
  return (
    <>
      <Button
        type={"button"}
        className={styles.button}
        icon={icon}
        onClick={() => showFavModal(true)}
      />
    </>
  );
};

export default FavButton;
