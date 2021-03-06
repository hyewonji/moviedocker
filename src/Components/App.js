import React,{ useEffect } from 'react'
import Favicon from "../favicon";
import Router from 'Components/Router'
import GlobalStyles from 'Components/Globalstyles'


function App() {
  Favicon()
  return (
    <>
      <Router />
      <GlobalStyles />  
    </>
  );
}

export default App;
