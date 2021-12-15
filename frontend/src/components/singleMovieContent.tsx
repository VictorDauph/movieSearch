import { useContext, useEffect } from 'react';
import { MovieFetchContext } from '../context/movieFetchContext';


function SingleMovieContent(){
    const MovieFetchCtx = useContext(MovieFetchContext)

    const movieId = localStorage.getItem("userFeed")
    useEffect(()=>{
        MovieFetchCtx.getMovie(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e3ddd4b9392b10229880876e06626f24`)
    },[])


    const movieDatas = MovieFetchCtx.loadedMovie
    console.log("movieDatas",movieDatas)
    
    
    if(movieDatas){
        return(<main>
            <div className="movieDetails">
                <h2>{movieDatas.title}</h2>
                <div>{movieDatas.overview}</div>
                <div>{movieDatas.vote_average}</div>
            </div>
            <img src={"https://image.tmdb.org/t/p/w500/"+movieDatas.poster_path}/>
        </main>)
    }
    else{
        return(
            <main>Loading</main>
        )
    }

}

export default SingleMovieContent