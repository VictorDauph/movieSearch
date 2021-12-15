import styled from "styled-components"

export const MovieDisplayStyle=styled.div`
& .MovieContainer{
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    margin-top:15px;
}
//design des miniatures films
& .movieThumbnail{ 
    padding: 0.5%;
    width: 15%;

//design des miniatures tablettes
    @media (min-width:768px) and (max-width:1023px){
        width:30%;
    }
//design des miniatures mobiles
@media (max-width:768px){
        width:45%;
    }
}
`