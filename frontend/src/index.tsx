//composants nécessaires à React
import React from 'react';
import ReactDOM from 'react-dom';
//BrowserRouter est le router spécifique à react qui gère le changement de page onepage
import {BrowserRouter} from "react-router-dom"; //BrowserRouter est l'élément qui permet de gérer le changement de pages dans React
//importations des contextes
import  {LightContextProvider} from "./context/lightcontext"
import { MovieFetchContextProvider } from './context/movieFetchContext';

//chargement du fichier App qui gère le code Javascript et met en place les composants
import App from './App';


ReactDOM.render(
  <MovieFetchContextProvider>
    <LightContextProvider>
      <BrowserRouter>
          <App />
      </ BrowserRouter>
    </LightContextProvider>
  </MovieFetchContextProvider>,
  
  document.getElementById('root')
);

