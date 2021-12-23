import './style/main.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Footer from "./Componenets/Footer";
import Header from "./Componenets/Header";
import HeaderBottom from "./Componenets/HeaderBottom";
import React from "react";

function App() {
    // document.addEventListener("click", e => {
    //     const isDropdownButton = e.target.matches("[data-dropdown-button]")
    //     if(!isDropdownButton && e.target.closest('[data-dropdown]') !=null ) return
    //
    //     let currentDropdown
    //     if(isDropdownButton){
    //         currentDropdown = e.target.closest('[data-dropdown]')
    //         currentDropdown.classList.toggle('active')
    //     }
    //
    //     document.querySelectorAll(['[data-dropdown].active']).forEach(dropdown => {
    //         if(dropdown === currentDropdown) return
    //         dropdown.classList.remove('active')
    //     })
    // })



  return (
      <div className="App">

              <BrowserRouter>
                <Header/>
                 <HeaderBottom/>
                <Footer/>
              </BrowserRouter>

      </div>



  );
}

export default App;
