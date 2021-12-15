import styled from "styled-components"

type Props ={
    headerColour:string;
}

export const HeaderStyle=styled.div<Props>`
    background-color:${(props)=>props.headerColour};
    color:white; 
    display:flex;
    flex-direction: row;
    justify-content:space-around;

    & h1{
        cursor: pointer;
    }
`