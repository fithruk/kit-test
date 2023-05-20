import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Page from './components/Page/Page';

const GlobalStyle = createGlobalStyle`
  
  * {
  box-sizing: border-box;
  font-family: "Montserrat";
  }

  a {
    text-decoration: none;
    color: black;
  }

  h1,h2,h3,h4,h5,h6 {
    margin : 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Page />
    </>
  );
}

export default App;
