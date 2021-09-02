import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles'

export const Nav = styled.nav `
align-items: center;
background-attachment: scroll;
background-clip: border-box;
background-color: rgba(0,0,0,0);
background-image: none;
background-origin: padding-box;
background-position: 0% 0%;
background-position-x: 0%;
background-position-y: 0%;
background-repeat: repeat;
background-size: auto;
border-bottom-style:none ;
border-bottom-width: 0px;
box-sizing:border-box;
color: rgb(0,0,0);
display: block;
height: 130px;
left: 110px;
line-height: 21px;
padding-top: 40px;
position: fixed;
right: 0px;
text-align: left;
top: 0px;
transition-delay: 0s;
transition-duration: 0.5s;
transition-property: background-color;
transition-timing-function: cubic-bezier(0.12, 0.96, 0.53, 1.01);
width: 1397px;
z-index: 20;
;
`

export const PromoBox = styled.div `
background-color: black;
box-sizing: border-box;
color: rgb(255,255,255);
display: block;
font-size: 13px;
font-weight: 400;
height: 40px;
left: 0px;
letter-spacing: 0.6px;
line-height: 20px;
padding-bottom: 10px;
padding-left: 10px;
padding-right: 10px;
padding-top: 10px;
position: absolute;
right:0px;
text-align: center;
text-transform: uppercase;
top: 0px;
transition-delay:0s;
transition-duration: 0.5s;
transition-property: all;
transition-timing-function: cubic-bezier(0.12,0.96,0.53,1.01);
z-index: 10;
`