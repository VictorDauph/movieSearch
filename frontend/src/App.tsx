// App.js sert à gérer le routing des pages à afficher
import {Routes, Route} from "react-router-dom"; //Route est l'élément qui gère les Routes pour le différentes pages à afficher. Switch permet de n'afficher qu'une page à la fois.

//importation des pages à afficher
import {MainPageStyle} from "./pages/MainPage.style";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";


//function App qui sert à gérer l'affichage des pages, du header et le router
function App() {
    return (
    <div>
        <Routes>
          <Route path="/" element={<MainPageStyle><MainPage /></MainPageStyle>} />  
          <Route path="/*" element={<NotFound />} />
        </Routes>
    </div>
    );
  }

  export default App;
  