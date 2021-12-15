//importation des composants à afficher
import Header from "../components/header"
import { HeaderStyle } from "../components/header.style"

import SingleMovieContent from "../components/singleMovieContent";
import { MainContainerStyle } from '../components/MainContainer.style';
import { SingleMovieStyle } from "../components/SingleMovie.style";


//importation du light context
import { useContext } from 'react';
import { LightContext } from '../context/lightcontext';





function SingleMovie(){

    const LightCtx= useContext(LightContext)

    interface Props{
        headerColour:string,
        backgroundColour:string,
        textColour:string,
    }

    const props:Props={
        headerColour:LightCtx.headerColour,
        backgroundColour:LightCtx.backgroundColour,
        textColour:LightCtx.textColour
    }

    return(
        <div>
           <HeaderStyle {...props} ><Header  /></HeaderStyle> 
           <MainContainerStyle {...props}> <SingleMovieStyle><SingleMovieContent /></SingleMovieStyle>  </MainContainerStyle> 
        </div>
    )
} 

export default SingleMovie