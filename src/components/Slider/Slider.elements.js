import styled from 'styled-components';

export const SliderHeader = styled.h1`
    position: absolute;
    background-color: rgba(255, 255, 255, .7);
    margin-left: 7em;
    padding: 12px;
    border-radius: 3px;
`;

export const Image = styled.img`
    height: 30vw;
    max-height: 100vh;
    position: static;
    width: 100%;
    margin: 0 0 0 12em;
`;

export const SliderImgBtn = styled.button`
    position: absolute;
    padding: 8px;
    margin-left: 14em;
    margin-top: 12em;
    background-color: black;
    color: white;
    text-border: 1px solid white;
    /* margin: 6em auto 0; */
    margin-left:7em;
    z-index:900
    
`;