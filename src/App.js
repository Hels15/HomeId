import './style/main.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Footer from "./Componenets/Footer";
import Header from "./Componenets/Header";
import React from "react";

function App() {
  return (
      <div className="App">

              <BrowserRouter>
                <Header/>
                <Footer/>
              </BrowserRouter>

      </div>



  );
}

export default App;
