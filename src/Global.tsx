import { createGlobalStyle } from "styled-components";

const GlobalState = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
         font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    body{
        background: #0B4C5F;
        overflow-x: hidden;
        text-decoration: none;
        margin: 0;
        padding: 0;
    }

    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        background: #0B4C5F;
        color: white;
        border: 3px solid white;
        transition: all 0.5s ease;
        &:hover{
            background-color: black;
            color: white;
        }
    }

    h3{
        color: white;
    }

    a{
        font-size: 1.1rem;
    }

    span{
        font-weight: lighter;
        color: #416CD5;
    }

    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
    label{
        color: white;
        font-weight: bold;
    }
`;

export default GlobalState;
