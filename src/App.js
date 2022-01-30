import './style/main.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeaderBottom from "./Components/HeaderBottom";
import React, {useContext} from "react";
import {CardHomeContext, CardHomeProvider} from "./Components/Contexts/ItemListContext";
import FullContent from "./Components/FullContent";
import ScrollToTop from "./Components/Home/ScrollToTop";
function App() {
  const {header_bottom} = useContext(CardHomeContext)
  return (
          <BrowserRouter>
              <CardHomeProvider>
                  <div className="App">
                   <Header id="header"/>
                      {
                          header_bottom.map(data => <HeaderBottom key={data.id} data={data}/>)
                      }

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
