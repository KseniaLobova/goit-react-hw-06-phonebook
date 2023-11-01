import styled from "styled-components";

export const WrapItem = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 20px;
`
export const TextItem = styled.p`
font-size:20px;`


export const Btn = styled.button`
width: 100px;
height: 30px;
background-color: #4CAF50;
border-radius: 5px;
border: transparent;
 &:hover,
  &:focus{
    background-color: #45a049;
  }
`