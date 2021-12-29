import React, { useEffect, useState } from "react";
import "./burger.scss";

const Burger = ({ visibleNavigation, burgerOpen }) => {
  const [classNames, setClassNames] = useState("burger");
  // Open burger
  const changeClasses = () => {
    if (classNames === "burger") {
      setClassNames("burger open");
      visibleNavigation(true);
    } else {
      setClassNames("burger");
      visibleNavigation(false);
    }
  };

  useEffect(() => {
    const closeBurger = () => {
      if (!burgerOpen) {
        setClassNames("burger");
      }
    };
    closeBurger();
  }, [burgerOpen]);

  return (
    <>
      <div className={classNames} onClick={() => changeClasses()}>
        <div className="burger__wrapper">
          <span className="burger__line"></span>
        </div>
      </div>
    </>
  );
};

export default Burger;
