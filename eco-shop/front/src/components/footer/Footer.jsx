import React, { useContext } from "react";
import LangContext from "../../context/Context";
import Subscribe from "../forms/subscribe/Subscribe";
import Icons from "../../elements/icons/Icons";
import { scrollUp } from "../../variables/mainFunctions";
import { Link } from "react-router-dom";
import { BlogIcon } from "../../variables/materialIcons";
import { ProductIcon } from "../../variables/materialIcons";
import { AboutIcon } from "../../variables/materialIcons";
import { QuestionIcon } from "../../variables/materialIcons";
import { PhoneIcon } from "../../variables/materialIcons";
import { MailIcon } from "../../variables/materialIcons";
import { LocationIcon } from "../../variables/materialIcons";
import "./footer.scss";

const Footer = () => {
  const { content } = useContext(LangContext);

  const upFirstLetter = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };

  return (
    <footer className="footer">
      <div className="footer__wrapper block-size">
        <div className="footer__content">
          <div className="footer__contacts">
            <div className="footer__contacts__title">
              <h4 className="title title--footer">
                {content.footer.contacts.title}
              </h4>
            </div>
            <div className="footer__contacts__link">
              <a href="tel:+380000000000" className="link">
                <PhoneIcon />
                <span>+380000000000</span>
              </a>
            </div>
            <div className="footer__contacts__link">
              <a href="mailto:hhfood@gmail.com" className="link">
                <MailIcon />
                <span>hhfood@gmail.com</span>
              </a>
            </div>
            <div className="footer__contacts__link">
              <a href="https://goo.gl/maps/ahxad8LCQ3cdG5n48" className="link">
                <LocationIcon />
                <span>{content.homeContacts.address}</span>
              </a>
            </div>
          </div>
          <div className="footer__navigation">
            <div className="footer__navigation__title">
              <h4 className="title title--footer">
                {content.footer.links.title}
              </h4>
            </div>
            <nav
              className="footer__navigation__links"
              onClick={() => scrollUp()}
            >
              <Link className="link link--footer" to="/about">
                <AboutIcon />
                <span>
                  {upFirstLetter(content.aboutmenu.about.toLowerCase())}
                </span>
              </Link>
              <Link className="link link--footer" to="/products">
                <ProductIcon />
                <span>
                  {upFirstLetter(content.dropdown.products.toLowerCase())}
                </span>
              </Link>
              <Link className="link link--footer" to="/faq">
                <QuestionIcon />
                <span>
                  {upFirstLetter(content.aboutmenu.delivery.toLowerCase())}
                </span>
              </Link>
              <Link className="link link--footer" to="/blog">
                <BlogIcon />
                <span>
                  {upFirstLetter(content.navigation.blog.toLowerCase())}
                </span>
              </Link>
            </nav>
          </div>
          <div className="footer__socials">
            <div className="footer__socials__title">
              <h4 className="title title--footer">
                {content.footer.socials.title}
              </h4>
            </div>
            <div className="footer__socials__link">
              <a href="https://www.facebook.com/" className="link link--footer">
                <Icons className="icon icon-facebook" href="#icon-facebook" />
                <span>facebook</span>
              </a>
            </div>
            <div className="footer__socials__link">
              <a href="https://twitter.com/" className="link link--footer">
                <Icons className="icon icon-twitter" href="#icon-twitter" />
                <span>twitter</span>
              </a>
            </div>
            <div className="footer__socials__link">
              <a href="https://www.linkedin.com/" className="link link--footer">
                <Icons className="icon icon-linkedin" href="#icon-linkedin" />
                <span>linkedIn</span>
              </a>
            </div>
          </div>
          <div className="footer__subscribe">
            <div className="footer__subscribe__title">
              <h4 className="title title--footer">
                {content.footer.subscribe.title}
              </h4>
            </div>
            <div className="footer__subscribe__form">
              <Subscribe />
            </div>
          </div>
        </div>
        <hr className="underline" />
        <div className="footer__copy">
          <span>SevenBrothers studio - 2021</span>
          <span>{"\u00a9"} All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
