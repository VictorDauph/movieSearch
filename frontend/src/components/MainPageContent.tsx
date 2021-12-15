import { useState, useEffect } from 'react';

//importation des composants
import { ClearableInput } from "./input"
import MovieDisplay from './moviesDisplay';
import { MovieDisplayStyle } from './MovieDisplay.style';



function MainPageContent(){
    const [inputValue,setInputValue]= useState("")
    function handleInput(input:string){
        setInputValue(input)
    }


    return(<main>
        <ClearableInput handleInput={handleInput} />
       <MovieDisplayStyle><MovieDisplay inputValue={inputValue} /></MovieDisplayStyle> 
        
    </main>)
}

export default MainPageContent