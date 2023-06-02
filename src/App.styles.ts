import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    font-family: Inter, "Helvetica Neue", Helvetica, Arial, serif;
    font-size: 13px;
    display: flex;
    max-height: 100vh;
    width: 100vw;
    background-color: #18181b;
  }
`;

export const Page = styled.div`
  max-height: 100vh;
  background-color: #18181b;
`;
