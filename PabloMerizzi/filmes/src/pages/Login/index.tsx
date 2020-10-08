import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/global.css';
import '../Login/style.css';

import Input from '../../components/input';

function Login() {
  return (
    <div className="Login">
      <Header description="Faça o Login e acesse a Coletanea"/>
      <h1>Login</h1>
      <Input type="password" label="Senha" />
      <Input  label="E-mail"/>
      <Footer/>
    </div>
  );
}

export default Login;