import { useContext, useEffect } from 'react';
import { MovieFetchContext } from '../context/movieFetchContext';


function SingleMovieContent(){
    const MovieFetchCtx = useContext(MovieFetchContext)

    const movieId = localStorage.getItem("userFeed")
    useEffect(()=>{
        MovieFetchCtx.getMovie(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e3ddd4b9392b10229880876e06626f24`)
    },[])



    const movieDatas:any = MovieFetchCtx.loadedMovie
    
    if(movieDatas !== undefined){


        console.log("movieDatas",movieDatas)
        const title:string = movieDatas.title
        const overview:string = movieDatas.overview
        const vote:string = movieDatas.vote_average

        return(<main>
            <div className="movieDetails">
                <h2>{title}</h2>
                <div>{overview}</div>
                <div>{vote}</div>
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