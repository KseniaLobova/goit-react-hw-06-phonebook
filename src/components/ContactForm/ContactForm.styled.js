import styled from "styled-components";
import { Form,Field,ErrorMessage } from "formik";

export const FormStyled = styled(Form)`
margin-bottom: 50px;
width: 300px;
display: flex;
flex-direction: column;
padding: 20px;
gap: 20px;
background-color:#f2f2f2;
 border-radius: 5px;
  padding: 20px;
`

export const Label = styled.label`
display: flex;
flex-direction: column;
gap: 10px;
font-size: 14px;
`
export const Input = styled(Field)`
 border-radius: 4px;
 border: none;
 height: 30px;
 `
export const BtnAdd = styled.button`
 height: 35px;
 border-radius: 4px;
 border: none;
 background-color: #4CAF50;
  &:hover,
  &:focus{
    background-color: #45a049;
  };
 `
export const Error = styled(ErrorMessage)`
 color: red;
 font-size: 10px;
 ` 