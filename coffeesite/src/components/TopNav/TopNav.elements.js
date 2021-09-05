import styled from 'styled-components'

export const TransparentNavWrapper = styled.div `
margin: 0;
padding: 0;
display: flex;
margin-top: 10vh;
`

export const TransparentNavBar = styled.nav `

position: fixed;
justify-content: center;
align-items: center;
display: flex;
width: 100%;
height: 100px;
padding: 10px 90px;
box-sizing: border-box;
background: yellow;
border-bottom: 4px solid #fff;
z-index: 10;

`

export const TransparentNavItem = styled.ul`
list-style: none;
justify-content: center;
align-items: center;
margin: 10px 20px;
padding: 40px;
display: flex;
color: purple;
text-transform: uppercase;



`