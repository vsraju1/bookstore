import React, { useState } from "react";
import "./MainPage.css";
import AllBooks from "./AllBooks";
import Home from "../Landing/Home/Home";
import Header from "../Landing/Header/Header";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Home />
      <div className="mainPageContainer">
        <AllBooks />
        {/* <EnglishBooks /> */}
      </div>
    </div>
  );
};

export default MainPage;
