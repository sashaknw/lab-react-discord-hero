
import React from 'react';
import discordLogo from '../assets/discord-logo.png';
import hamburgesa from '../assets/hamburgesa.png';
import './Navbar.css';


function Navbar(){
    return (
      <div className="nav-wrapper">
        <div className="NavBar">
          <img src={discordLogo} alt="discord logo" className="discord-logo" />

          <img src={hamburgesa} alt="show menu icon" className="hamburgesa" />
        </div>
      </div>
    );
}

export default Navbar;