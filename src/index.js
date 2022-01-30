import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import {CardHomeContext, CardHomeProvider} from "./Components/Contexts/ItemListContext";

ReactDOM.render(
  <React.StrictMode>
     <CardHomeProvider>
         <App />
     </CardHomeProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
