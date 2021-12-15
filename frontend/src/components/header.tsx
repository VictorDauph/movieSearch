//Importation de useHistory pour  navigation programmatique
import { useNavigate } from "react-router-dom";

//importation des composants à afficher
import LightSwitch from "./switch"
import { SwitchStyle } from "./switch.style"

function Header(){
    const navigate = useNavigate()

    function goToHomePage(){
        navigate("/")
    }
    

    return(
        <header>
            <h1 onClick={goToHomePage}>Movies</h1>
           <SwitchStyle > <LightSwitch /> </ SwitchStyle>
        </header>
    )
} 

export default Header