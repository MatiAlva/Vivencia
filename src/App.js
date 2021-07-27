import './App.css';
import React from 'react';
import Header from './Components/Header';
import Section from './Components/Section';
import Article from './Components/Article';
import Aside from './Components/Aside';
import Footer from './Components/Footer';
import Modal from './Components/Modal';

import "bootstrap/dist/css/bootstrap.min.css";
import Foter from  './Components/Estilos/Foter.css';
import header from  './Components/Estilos/header.css';
import article from  './Components/Estilos/article.css';
import aside from  './Components/Estilos/aside.css';
import section from  './Components/Estilos/section.css';
import modal from './Components/Estilos/modal.css';

function App() {
  return (
    <div>

      <Header />

      <Modal />
                  
           

      <Section />


<br></br>
<br></br>

    <Article />


    <Aside />

    <Footer />

    </div>
    
  );
  
  
}



export default App;