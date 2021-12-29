import React, { useContext } from "react";
import aboutPhoto from "../../../../assets/images/about.jpg";
import { Link } from "react-router-dom";
import LangContext from "../../../../context/Context";
import style from "./about.module.scss";

const AboutSection = () => {
  const { content } = useContext(LangContext);
  return (
    <div className={`${style.about} block-size`}>
      <div className={style["about__title"]}>
        <h2 className="title title--home-resize">{content.homeAbout.title}</h2>
      </div>
      <div className={style.wrapper}>
        <div className={style["about__img"]}>
          <img src={aboutPhoto} alt="our team" className="img" />
        </div>
        <div className={style["about__content"]}>
          <p className={style.paragraph}>{content.homeAbout.content}</p>

          <Link className={style["about__link"]} to="/about">
            {content.homeAbout.link}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
