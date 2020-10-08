import React from 'react';
import logo from '../../assets/images/logo.png';
import '../../assets/global.css';
import './style.css';
import {Link} from 'react-router-dom'

interface HeaderProps{
  description: string;
}

const Header:React.FC<HeaderProps> =(props) => {
  return (
    <div className="Header">
        <div className="section-container-logo">
            <img src={logo} className="Logo"/>
            <h3>{props.description}</h3>
        </div>

        <div className="section-container-nav">
                <a><Link to="/">Home      </Link></a>
                <a><Link to="/login">Login</Link></a>
                <a><Link to="/">Cadastro  </Link></a>
        </div>
    </div>
  );
}

export default Header;