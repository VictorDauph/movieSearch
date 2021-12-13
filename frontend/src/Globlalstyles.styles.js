// Ce fichier sert à appliquer des styles globaux sur l'ensemble du document
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` //Ici on style le body mais on pourrait le faire pour d'autres éléments.
body{
    background-color: pink;
    margin:0px;
    padding:0px;
}
`