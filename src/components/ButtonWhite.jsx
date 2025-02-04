import React from 'react';
import './ButtonWhite.css'

function ButtonWhite({ text = "Download for Mac" }) {
  return <button className="button-white">{text}</button>;
}

export default ButtonWhite;