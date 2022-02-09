import React, {Suspense}from 'react';
import ReactDOM from 'react-dom';
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {CardHomeProvider} from "./Components/Contexts/ItemListContext";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend'
import { I18nextProvider } from 'react-i18next';


i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'hu'],
    fallbackLng: 'en',
    debug: false,
    // Options for language detector
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    // react: { useSuspense: false },
    backend: {
     loadPath: `${process.env.PUBLIC_URL}/{{lng}}.json`,
    },
  })

const loadingMarkup = (
    <div className="loading-text">
        <h2>Loading...</h2>
    </div>
)


ReactDOM.render(
         <CardHomeProvider>
         <Suspense fallback={loadingMarkup}>
         <React.StrictMode>

         <App />
  </React.StrictMode>

    </Suspense>
     </CardHomeProvider>,


  document.getElementById('root')
);

reportWebVitals();
