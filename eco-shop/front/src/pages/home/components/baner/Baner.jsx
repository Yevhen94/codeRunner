import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper";
import firstSlide from "../../../../assets/images/Baner/1.jpg";
import secondSlide from "../../../../assets/images/Baner/2.jpg";
import thirdSlide from "../../../../assets/images/Baner/3.jpg";
import fourthSlide from "../../../../assets/images/Baner/4.jpg";
// import Button from "../../../../elements/button/Button"
import "./baner.scss";
import "swiper/swiper.scss";
import { Link } from "react-router-dom";
import LangContext from "../../../../context/Context";

const Baner = () => {
  const { content } = useContext(LangContext);
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect="Coverflow"
        autoplay={true}
        loop={true}
        speed={800}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="slide">
            <img className="img" src={firstSlide} alt="first slide" />
            <div className="slide__content">
              <div className="slide__content__wrapper">
                <h2 className="slide__content__title">
                  {content.baner.buyTitle}
                </h2>
                <Link className="slide__content__link" to="/products">
                  {content.baner.buyLink}
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img className="img" src={secondSlide} alt="second slide" />
            <div className="slide__content">
              <div className="slide__content__wrapper">
                <h2 className="slide__content__title">
                  {content.baner.accountTitle}
                </h2>
                <Link className="slide__content__link" to="/account">
                  {content.baner.accountLink}
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img className="img" src={thirdSlide} alt="third slide" />
            <div className="slide__content">
              <div className="slide__content__wrapper">
                <h2 className="slide__content__title">
                  {content.baner.aboutTitle}
                </h2>
                <Link className="slide__content__link" to="/about">
                  {content.baner.aboutLink}
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img className="img" src={fourthSlide} alt="fourth slide" />
            <div className="slide__content">
              <div className="slide__content__wrapper">
                <h2 className="slide__content__title">
                  {content.baner.blogTitle}
                </h2>
                <Link className="slide__content__link" to="/blog">
                  {content.baner.blogLink}
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Baner;
