import React from 'react';
import logo from '../../assets/images/logo.png';
import '../../assets/global.css';
import './style.css'

function Header() {
  return (
    <div className="Header">
        <div className="section-container-logo">
            <img src={logo} className="Logo"/>
        </div>

        <div className="section-container-nav">
                <a>Perfil</a>
                <a>Filmes</a>
                <a>Gênero</a>
        </div>
    </div>
  );
}

export default Header;