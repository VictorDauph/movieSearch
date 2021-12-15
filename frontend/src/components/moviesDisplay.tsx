//importation du light context
import { useContext,useEffect } from 'react';
import { MovieFetchContext } from '../context/movieFetchContext';
import MovieItem from './MovieItem';


function MovieDisplay(props){
    const MovieFetchCtx=useContext(MovieFetchContext)
    
    useEffect(()=>{
        if(props.inputValue==""){
        MovieFetchCtx.getMovies("https://api.themoviedb.org/3/movie/popular?api_key=e3ddd4b9392b10229880876e06626f24")
        }
        else{
            MovieFetchCtx.getMovies(`https://api.themoviedb.org/3/search/movie?api_key=e3ddd4b9392b10229880876e06626f24&query=${props.inputValue}`)
        }
    },[props.inputValue])

    if (MovieFetchCtx.loadedMovies !== undefined){
        return(
            <div className="MovieContainer">
               {MovieFetchCtx.loadedMovies.results.map(movie => ( //MovieFetchCtx.loadedMovies.results est l'array qui contient les données de chaque film à afficher. .map permet de traiter chaque élément du tableau les un après les autres
                <MovieItem {...movie} /> 
            )
            )}
            </div>
        )

    }
    else{
        return(<div>Loading</div>)
    }



}

export default MovieDisplay