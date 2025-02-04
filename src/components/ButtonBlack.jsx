import React from "react";
import "./ButtonBlack.css";

function ButtonBlack({ text = "Open Discord in your browser" }) {
  return <button className="button-black">{text}</button>;
}

export default ButtonBlack;
