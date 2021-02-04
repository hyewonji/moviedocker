import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};
  a{
    text-decoration: none;
    color: inherit;
  }
  *{
    box-sizing: border-box;
  }
  body{
    padding: 50px;
    font-size: 30px;
    font-weight: 200;
  }
`;

export default GlobalStyles;
