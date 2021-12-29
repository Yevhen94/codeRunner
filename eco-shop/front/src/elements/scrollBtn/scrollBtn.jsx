import React, { useState, useEffect } from "react";
import { ScrollUpIcon } from "../../variables/materialIcons";
import { scrollUp } from "../../variables/mainFunctions";
import "./scrollbtn.scss";

const ScrollBtn = () => {
  const [visible, setVisible] = useState({ display: "none" });

  useEffect(() => {
    const scrollBtnDisplay = () => {
      if (window.pageYOffset > 50) {
        setVisible({
          display: "flex",
        });
      } else {
        setVisible({
          display: "none",
        });
      }
    };
    window.addEventListener("scroll", scrollBtnDisplay);
    return () => window.removeEventListener("scroll", scrollBtnDisplay);
  });

  return (
    <>
      <div style={visible} className="scroll" onClick={() => scrollUp()}>
        <ScrollUpIcon />
      </div>
    </>
  );
};

export default ScrollBtn;
