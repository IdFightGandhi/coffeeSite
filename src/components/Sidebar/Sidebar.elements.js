import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Nav = styled.li`
background: transparent;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
z-index:1;


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
width: 200px;
height:100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
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
padding: 10px;
list-style: none;
height: 60px;
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
padding-left: 2.3rem;
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