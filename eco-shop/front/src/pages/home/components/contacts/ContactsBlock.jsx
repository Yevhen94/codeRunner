import React, { useContext } from "react";
import GoogleMaps from "../../../../elements/googlemaps/GoogleMaps";
import LangContext from "../../../../context/Context";
import style from "./contactsblock.module.scss";

const ContactsBlock = () => {
  const { content } = useContext(LangContext);
  return (
    <>
      <div className={`${style.contacts} block-size`}>
        <div className={style.title}>
          <h2 className="title title--home-resize">
            {content.homeContacts.title}
          </h2>
        </div>
        <div className={style.content}>
          <GoogleMaps
            latitude={49.588905627941685}
            longitude={34.557537769309235}
          />
          <div className={style.address}>
            <div className={style["address__item"]}>
              <div className={style["address__item__inner"]}>
                <div className={style["address__item__front"]}>
                  <span>{content.homeContacts.tel}</span>
                </div>
                <div className={style["address__item__back"]}>
                  <a className={style.link} href="tel:+380000000000">
                    +38 000 000-00-00
                  </a>
                </div>
              </div>
            </div>
            <div className={style["address__item"]}>
              <div className={style["address__item__inner"]}>
                <div className={style["address__item__front"]}>
                  <span>{content.homeContacts.email}</span>
                </div>
                <div className={style["address__item__back"]}>
                  <a className={style.link} href="mailto:hhfood@gmail.com">
                    hhfood@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className={style["address__item"]}>
              <div className={style["address__item__inner"]}>
                <div className={style["address__item__front"]}>
                  <span>{content.homeContacts.addressTitle}</span>
                </div>
                <div className={style["address__item__back"]}>
                  <a
                    className={style.link}
                    href="https://goo.gl/maps/jgciyrmuiXD2tzMT6"
                  >
                    {content.homeContacts.address}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactsBlock;
