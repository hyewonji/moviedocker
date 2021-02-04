import React from "react";
import Router from "./Router";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

const Title = styled.div`
  font-size: 50px;
`;

function App() {
  return (
    <div>
      <Title>Coin Explorer</Title>
      <Router />
      <GlobalStyles />
    </div>
  );
}
export default App;
