import React from "react";
import Reactdom from "react-dom";

// Components Import
import Header from "./Components/Header";
import Main from "./Components/MainPage";
import Footer from "./Components/Footer";

//Stylesheet
import "./index.css";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

Reactdom.render(<App />, document.getElementById("root"));
