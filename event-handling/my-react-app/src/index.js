import React from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";
import "antd/dist/reset.css";

const handleClick = () => {
  alert("Alert!!!");
};

const element = (
  <Button
    style={{ margin: "10px 10px" }}
    type="primary"
    onClick={handleClick} // Add the onClick event handler
  >
    Alert me!
  </Button>
);

ReactDOM.render(element, document.getElementById("root"));
