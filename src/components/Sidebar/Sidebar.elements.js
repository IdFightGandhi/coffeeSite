import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.div `
position:fixed;
height:100vh;
width:200px;

`
export const Nav = styled.li`
background: transparent;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
z-index:1;


`;

export const LogoIcon = styled(Link)`
margin-left: 2rem;
font-size: 3rem;
display: flex;
flex-direction: column;
padding-bottom:5em;
/* margin-bottom: 100px; */


`

export const Spacer = styled.div`
margin: 150, 0;
height: 100px;

`

export const NavIcon = styled(Link)`
margin-left: 1.5rem;
padding:15px;
font-size: 2rem;
height: 50px;
display:flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`

export const SidebarNav = styled.nav`
background: white;
width: 200px;
height:100%;
display: flex;
flex-direction: column;
/* justify-content: space-between; */
position: fixed;
top: 0;
left: ${({ sidenav }) => (sidenav ? '0' : '-100%')};
transition: 150ms;
z-index: 10;
`

export const SidebarWrap = styled.div`
width: 100%;
`

export const SidebarLink = styled(Link)`
display: flex;
color:purple;
justify-content: space-between;
align-items: center;
margin:25px 0px 15px 20px;
padding: 10px;
list-style: none;
height: 30px;
text-decoration: none;
font-size: 18px;

&:hover {
    background:#252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
}

`

export const SidebarLabel = styled.span`
margin-left: 16px;
`

export const DropdownLink = styled(Link)`
background: #414757;
height: 60px;
padding-left: 2.5rem;
display: flex;
align-items: center;
text-decoration: none;
color: #f5f5f5;
font-size: 18px;

&:hover {
    background: #632ce4;
    cursor: pointer;
}
`

