//Importation de useHistory pour  navigation programmatique
import { useNavigate } from "react-router-dom";

function MovieItem(props){
    const navigate = useNavigate()

    function goToSingleMovie(){
        localStorage.setItem("userFeed",props.id)
        navigate("/SingleMovie")
    }
    
    console.log("Movie item called",props.title)
    return(
        <img title={props.title} className="movieThumbnail" src={"https://image.tmdb.org/t/p/w500/"+props.poster_path} onClick={goToSingleMovie}  />
    )
}

export default MovieItem