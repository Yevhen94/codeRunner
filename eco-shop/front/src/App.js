import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Blog from "./pages/blog/Blog";
import Contacts from "./pages/contacts/Contacts";
import Home from "./pages/home/Home";
import News from "./pages/news/News";
import Products from "./pages/products/Products";
import About from "./pages/about/About";
import Account from "./pages/account/Account";
import Faq from "./pages/faq/Faq";
import Delivery from "./pages/delivery/Delivery";
import Footer from "./components/footer/Footer";
import "./app.scss";
import LangContext from "./context/Context";
import { data } from "./variables/data";

const App = () => {
  const [language, setLanguage] = useState(() =>
    localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
  );

  const [role, setRole] = useState(() =>
    localStorage.getItem("role") ? localStorage.getItem("role") : ""
  );

  const [shopList, setShopList] = useState(() =>
    localStorage.getItem("shopList")
      ? JSON.parse(localStorage.getItem("shopList"))
      : []
  );

  const [welcomeShow, setWelcomeShow] = useState(false);

  const [name, setName] = useState(() =>
    localStorage.getItem("user") ? localStorage.getItem("user") : ""
  );
  const [content, setContent] = useState(data.en);

  useEffect(() => {
    localStorage.setItem("user", name);
    localStorage.setItem("lang", language);
    localStorage.setItem("shopList", JSON.stringify(shopList));
    localStorage.setItem("role", role);
  }, [name, language, shopList, role]);

  useEffect(() => {
    const changeLanguage = () => {
      language === "en" ? setContent(data.en) : setContent(data.ru);
    };
    changeLanguage();
  }, [language]);

  const value = {
    setWelcomeShow,
    welcomeShow,
    setLanguage,
    content,
    name,
    setName,
    shopList,
    setShopList,
    role,
    setRole,
  };

  return (
    <>
      <LangContext.Provider value={value}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/products" element={<Products />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/account" element={<Account />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/delivery" element={<Delivery />} />
          </Routes>
          <Footer />
        </Router>
      </LangContext.Provider>
    </>
  );
};

export default App;
