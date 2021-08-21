import { createGlobalStyle } from "styled-components";
import Mood from "./Mood";
export const GlobalStyle = createGlobalStyle`
    body{
        padding: 0px;
        margin: 0px;
        background-color:${(props) => (Mood ? "red" : "green")};
        box-sizing:border-box;
        font-family:Arial, Helvetica, sans-serif;
    }

`;
