import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Nav = styled.div`
background: transparent;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
z-index:9;


`;

export const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display:flex;
justify-content: flex-start;
align-items: center;
`

export const SidebarNav = styled.nav`
background: gold;
width: 250px;
height:100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({ sidenav }) => (sidenav ? '0' : '-100%')};
transition: 350ms;
z-index: 10;
`

export const SidebarWrap = styled.div`
width: 100%;
`

export const SidebarLink = styled(Link)`
display: flex;
color:purple;

`

export const SidebarLabel = styled.span`

`