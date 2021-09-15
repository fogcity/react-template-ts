import React from "react";
import ReactDOM from "react-dom";
import logo from "./assets/logo.svg";
import "./index.css";
const HelloWorld = () => {
  return <img src={logo} />;
};

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
