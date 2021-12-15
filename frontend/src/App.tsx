// App.js sert à gérer le routing des pages à afficher
import {Routes, Route} from "react-router-dom"; //Route est l'élément qui gère les Routes pour le différentes pages à afficher. Switch permet de n'afficher qu'une page à la fois.

//importation des pages à afficher
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";
import { GlobalStyles } from './Globlalstyles.styles';
import SingleMovie from "./pages/singleMovie";

//importation du light context
import { useContext } from 'react';
import { LightContext } from './context/lightcontext';

//function App qui sert à gérer l'affichage des pages, du header et le router
function App() {
  const LightCtx= useContext(LightContext)
  interface Props{
    backgroundColour:string,
}


const props:Props={
  backgroundColour:LightCtx.backgroundColour
}

    return (
    <div>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<MainPage />} />  
          <Route path="/singleMovie" element={<SingleMovie />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
    </div>
    );
  }

  export default App;
  