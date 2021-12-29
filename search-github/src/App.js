import React, { useState } from "react";
import Home from "./pages/home/Home";
import "./app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavButton from "./components/favour/favbutton/FavButton";
import Favour from "./components/favour/Favour";
import SingleRepo from "./pages/singlerepo/SingleRepo";

const App = () => {
  const [modalShow, setModalShow] = useState(false);
  const showFavModal = (value) => {
    setModalShow(value);
  };

  return (
    <>
      <BrowserRouter>
        <FavButton showFavModal={showFavModal} />
        <Favour modalShow={modalShow} showFavModal={showFavModal} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singlerepo" element={<SingleRepo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
