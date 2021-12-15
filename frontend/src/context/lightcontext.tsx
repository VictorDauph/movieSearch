//Ce fichier sert à rendre disponibles les variables contextuelles liées à la gestion du light/dark theme.
import { createContext, useState } from "react";

export const LightContext = createContext({
    light:true,
    headerColour : "#60A5FA",
    backgroundColour:"#FFFFFF",
    textColour:"#000000",
    toggleLight:()=>{}
})

export function LightContextProvider(props:any){
    const[light,changeLight]=useState(true)
    console.log("light", light)
    const[headerColour,ChangeHeaderColour]=useState("#60A5FA")
    const[backgroundColour,ChangeBackgroundColour]=useState("#FFFFFF")
    const[textColour,ChangeTextColour]=useState("#000000")


    function toggleLight(){
        if (light==true){
            console.log("switching light off",light)
            changeLight(false)
            ChangeHeaderColour("#1F2937") ;
            ChangeBackgroundColour("#4B5563")
            ChangeTextColour("#FFFFFF")
            console.log("light",light,"headerColour", headerColour, "backgroundColour",backgroundColour)
        }
        else if(light==false){
            console.log("switching light on",light)
            changeLight(true)
            ChangeHeaderColour("#60A5FA") ;
            ChangeBackgroundColour("#FFFFFF")
            ChangeTextColour("#000000")
            console.log("light",light,"headerColour", headerColour, "backgroundColour",backgroundColour)
        }
    }

    const context ={
        light:light,
        headerColour:headerColour,
        backgroundColour:backgroundColour,
        textColour:textColour,
        toggleLight:toggleLight,
    }

    return(<LightContext.Provider value={context}> {/* Ce bout de code sert à passer le contenu de LightContext au reste du projet. */}
        {props.children}
    </LightContext.Provider>);
}




