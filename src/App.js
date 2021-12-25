import './style/main.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Footer from "./Componenets/Footer";
import Header from "./Componenets/Header";
import HeaderBottom from "./Componenets/HeaderBottom";
import Content from "./Componenets/Content";
import React from "react";


function App() {



  return (
      <div className="App">

              <BrowserRouter>
                <Header/>
                 <HeaderBottom/>
                  <Content/>
                <Footer/>
              </BrowserRouter>

      </div>



  );
}

export default App;
