import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    html {
        width: 100%;
        height: 100%;
        color: #ecf0f1;
        font-family: "Arial";
    }

    body {
        background-color: #0a3d62;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        justify-items: center;
        padding: 0px 200px;
    }
`;
