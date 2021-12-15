import styled from "styled-components"

export const SingleMovieStyle=styled.div`
& main{
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content:center
}
& .movieDetails{
    width:60%;
    & *{
        padding:15px;
    }
}
& img{
    width:40%;
    @media (max-width:768px){
        width:80%;
    }
}
`