import styled from "styled-components"

type Props ={
    backgroundColour:string;

}

export const MainContainerStyle=styled.div<Props>`
       background-color:${(props)=>props.backgroundColour};
       color:${(props)=>props.textColour};
       min-height: 91.3vh;
       padding: 15px 10%
`