import React from "react";
import Baner from "./components/baner/Baner";
import AboutSection from "./components/about/About";
import Faq from "./components/faq/Faq";
import "./home.scss";
import ContactsBlock from "./components/contacts/ContactsBlock";
import Products from "./components/products/Products";

const Home = () => {
  return (
    <div className="container">
      <main className="main">
        <div className="main__wrapper">
          <Baner />
          {/* <Benefits /> */}
          <AboutSection />
          <Products />
          <ContactsBlock />
          <Faq />
        </div>
      </main>
    </div>
  );
};

export default Home;
