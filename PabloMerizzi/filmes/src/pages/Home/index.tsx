import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import '../../assets/global.css';
import '../Home/style.css';

function Home() {
  return (
    <div className="Home">
      <Header description="Conheça sua Coletanea"/>
      <div className="centro">

      </div>
      <Footer/>
    </div>
  );
}

export default Home;