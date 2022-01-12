import { createGlobalStyle } from "styled-components";
import NunitoSansExtraLight from "../assets/fonts/NunitoSans-ExtraLight.woff";
import NunitoSansLight from "../assets/fonts/NunitoSans-Light.woff";
import NunitoSansRegular from "../assets/fonts/NunitoSans-Regular.woff";
import NunitoSansBold from '../assets/fonts/NunitoSans-Bold.woff';

const GlobalStyle = createGlobalStyle `

@font-face {
    font-family: "Nunito Sans";
    src: url(${NunitoSansExtraLight}) format("woff");
    font-weight: 200;
    font-style: normal;
}
@font-face {
    font-family: "Nunito Sans";
    src: url(${NunitoSansLight}) format("woff");
    font-weight: 300;
    font-style: normal;
}
@font-face {
    font-family: "Nunito Sans";
    src: url(${NunitoSansRegular}) format("woff");
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: "Nunito Sans";
    src: url(${NunitoSansBold}) format("woff");
    font-weight: bold;
    font-style: normal;
}


html {
    font-size: 62.5%;
    line-height: 1.6;
    position: relative;
    min-height: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
}

*, *:before, *:after {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
}

body, textarea {
    font-family: 'Nunito Sans';
    font-size: 1.6rem;
    margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    line-height: 1.5em;
    letter-spacing: 2px;
}
h1 {
    font-size: 5.6rem;
}

h2 {
    font-size: 4rem;
}

h3 {
    font-size: 3.2rem;
}

h4 {
    font-size: 2rem;
}
h5 {
    font-size: 1.6rem;
}


main {
    display: flex;
    flex-direction: column;
    align-items: center;
}
`

export default GlobalStyle;