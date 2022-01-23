import './style/main.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeaderBottom from "./Components/HeaderBottom";
import Content from "./Components/FindYourHome";
import React from "react";
import {CardHomeProvider} from "./Components/Contexts/ItemListContext";
import {Image} from "@mui/icons-material";
import ImageSlider from "./Components/Home/ImageSlider";
import FullContent from "./Components/FullContent";
import ScrollToTop from "./Components/Home/ScrollToTop";
function App() {





  return (
          <BrowserRouter>
              <CardHomeProvider>
                  <div className="App">
                   <Header id="header"/>
                    <HeaderBottom/>
                    <br/>
                     <FullContent/>
                    <div className="move">
                        <ScrollToTop/>
                    </div>
                    <Footer/>
                    </div>

              </CardHomeProvider>
          </BrowserRouter>

  );
}

export default App;
