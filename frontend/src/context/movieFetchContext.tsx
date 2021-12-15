//Ce fichier sert à rendre disponibles les variables contextuelles liées à la gestion du light/dark theme.
import { createContext, useState } from "react";

export const MovieFetchContext = createContext({
    getMovies:(getUri:any)=>{},
    getMovie:(getUri:any)=>{},
    loadedMovies:[],
    loadedMovie:[],
})

export function MovieFetchContextProvider(props:any){
    const [loadedMovies,setLoadedMovies]=useState()
    const [loadedMovie,setLoadedMovie]=useState()

    function getMovies(getUri:string){
        function initHeadersForFetch(method:string){ 
            return new Promise ((resolve) => {            
                const fetchHeader = {
                'Content-type': 'application/json'
                }
                
                const init = {
                    method: method,
                    headers: fetchHeader,
                    mode: 'cors',
                    cache: 'default',
                }
                resolve(init)
            })
        }

        initHeadersForFetch("GET").then( (init:any)=>{
            console.log("fetching Movies", init.headers.Authorization)     
            fetch(getUri, init).then(res => res.json()).then(
                movies => {
                    console.log("fetched Movies", movies)
                    setLoadedMovies(movies)                    
                }
            )
        })
    }

    function getMovie(getUri:string){
        function initHeadersForFetch(method:string){ 
            return new Promise ((resolve) => {            
                const fetchHeader = {
                'Content-type': 'application/json'
                }
                
                const init = {
                    method: method,
                    headers: fetchHeader,
                    mode: 'cors',
                    cache: 'default',
                }
                resolve(init)
            })
        }

        initHeadersForFetch("GET").then( (init:any)=>{
            console.log("fetching Movies", init.headers.Authorization)     
            fetch(getUri, init).then(res => res.json()).then(
                movies => {
                    console.log("fetched Movies", movies)
                    setLoadedMovie(movies)                    
                }
            )
        })
    }




    const context ={
        getMovies:getMovies,
        getMovie:getMovie,
        loadedMovies:loadedMovies,
        loadedMovie:loadedMovie
    }

    return(<MovieFetchContext.Provider value={context}> {/* Ce bout de code sert à passer le contenu de MovieFetchContext au reste du projet. */}
        {props.children}
    </MovieFetchContext.Provider>);
}




