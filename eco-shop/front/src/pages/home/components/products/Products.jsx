import React, { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
  Grid,
} from "swiper";
import Button from "../../../../elements/button/Button";
import style from "./products.module.scss";
import Berries from "../../../../assets/images/products/berries.jpg";
import Coffee from "../../../../assets/images/products/coffee.jpg";
import Fruits from "../../../../assets/images/products/fruits.jpg";
import Grits from "../../../../assets/images/products/grits.jpg";
import Nuts from "../../../../assets/images/products/nuts.jpg";
import Vegetables from "../../../../assets/images/products/vegetables.jpg";
import LangContext from "../../../../context/Context";
import { scrollUp } from "../../../../variables/mainFunctions";
import { useNavigate } from "react-router-dom";
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";

const Products = () => {
  const { content } = useContext(LangContext);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  const [count, setCount] = useState(3);

  useEffect(() => {
    const changeRedirect = () => {
      if (redirect) {
        navigate("/products");
      }
    };
    changeRedirect();
  }, [redirect]);

  useEffect(() => {
    const changeClide = () => {
      if (
        document.documentElement.clientWidth <= 800 &&
        document.documentElement.clientWidth > 400
      ) {
        setCount(2);
      } else if (document.documentElement.clientWidth <= 400) {
        setCount(1);
      } else {
        setCount(3);
      }
    };
    changeClide();
    window.addEventListener("resize", changeClide);
  }, [document.documentElement.clientWidth]);

  const images = [Fruits, Vegetables, Berries, Nuts, Coffee, Grits];
  return (
    <>
      <div className={style.products}>
        <div className={style["products__title"]}>
          <h2 className="title">{content.productsHome.title}</h2>
        </div>
        <div className={style["products__content"]}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow, Grid]}
            spaceBetween={20}
            effect="Coverflow"
            autoplay={true}
            loop={true}
            speed={400}
            slidesPerView={count}
            scrollbar={{ draggable: true }}
          >
            {images.map((item, index) => (
              <SwiperSlide key={Date.now + index + 1}>
                <div className={style.slide}>
                  <div className={style["slide__content"]}>
                    <div className={style["slide__img"]}>
                      <img src={item} alt="slide" className="img" />
                    </div>
                    <div className={style["slide__title"]}>
                      <h4 className={style.title}>
                        {content.productsHome.category[index]}
                      </h4>
                    </div>
                    <div className={style.wrapper}>
                      <Button
                        type={"button"}
                        className={style.button}
                        content={"See more"}
                        feedbackClick={() => {
                          scrollUp();
                          setRedirect(true);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Products;
