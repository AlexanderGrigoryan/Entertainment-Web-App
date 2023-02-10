import { createGlobalStyle } from "styled-components";



const GlobalStyles = createGlobalStyle<{font: string}>`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    width: 100vw;
    min-height: 100vh;
    background: #10141E;
    font-family: ${(props) => props.font};
}

button, input {
    font-family: ${(props) => props.font}
}
`;

export default GlobalStyles;