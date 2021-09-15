import React from "react";
import ReactDOM from "react-dom";
import logo from "./assets/logo.svg";
const HelloWorld = () => {
  return <img src={logo} />;
};

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
