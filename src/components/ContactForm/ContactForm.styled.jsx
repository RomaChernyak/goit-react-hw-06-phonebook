import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const rotateColors = keyframes`
    0% {
        border-color: red;
    }

    20% {
        border-color: yellow;
    }

    40% {
        border-color: lime;
    }

    60% {
        border-color: aqua;
    }

    80% {
        border-color: blue;
    }

    100% {
        border-color: magenta;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;

    border: 2px solid;
    border-radius: 5px;
    animation: ${rotateColors} 6s linear infinite;
    
    padding: 20px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    font-weight: 500;
`;

export const Input = styled.input`
    margin-top: 10px;
    padding: 2px 10px;

    border: 0.5px solid black;
    border-radius: 2px;
    
    width: 240px;
`;

export const Button = styled.button`
    background-color: white;
    border: 1px solid gray;
    border-radius: 5px;

    cursor: pointer;
    width: 120px;
    height: 24px;

    &:hover {
        color: blue;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
    }

    &:focus, :active {
        outline: none;

        background-color: blue;
        color: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
    }
`;