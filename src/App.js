import './style/main.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeaderBottom from "./Components/HeaderBottom";
import Content from "./Components/Content";
import React from "react";


function App() {



  return (
      <div className="App">

              <BrowserRouter>
                <Header/>
                 <HeaderBottom/>
                  <br/>
                  <Content/>
                <Footer/>
              </BrowserRouter>

      </div>



  );
}

export default App;
