import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as Clear } from '../ressources/clear.svg';

const Container = styled.div`
  font-family: 'Arial';
  display: flex;
  background-color: white;
  
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid;
  border-radius: 5px;
  &:hover {
    box-shadow: 1px 1px 1px thistle;
  }
`;

const TextInput = styled.input`
  flex: 1 0;
  min-width: 50px;
  min-height: 25px;
  font-size: inherit;
  background-color: white;
  padding-left: 5px;
  border: 0;
  &:focus {
    outline: none;
  }
`;

const Icon = styled.div`
  flex: 0 0;
`;

export const ClearableInput = (props:any) => {
  let input = useRef()
  function handleChange(event:any){
    props.handleInput(event.target.value)
  }

  function handleErase(event:any){
    props.handleInput(event.current.value)
  }


  return (
    <Container>
      <TextInput type="text" placeholder="Quel film recherchez vous?" ref={input} onChange={handleChange} />
      <Icon>
        <Clear
          width="20px"
          height="20px"
          stroke="black"
          onClick={() => {
            input.current.value=""
            handleErase(input);
          }}
        />
      </Icon>
    </Container>
  );
};