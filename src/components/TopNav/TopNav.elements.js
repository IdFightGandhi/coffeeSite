import styled from 'styled-components' 
import { Link } from 'react-router-dom'

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
background: transparent;
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

&:hover{
    background-color: purple;
}

`

const NavbarDropdown = styled.div`
    position: relative;
    display: inline-block;

    &:hover {
      display: block;
    }
  `;
  const NavbarDropdownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
    padding: 12px 16px;
    z-index: 1;
  `;

export const Navbar: React.FC = () => {
  return (
    <NavbarDropdown>
      <span>Menu</span>
      <NavbarDropdownContent>
        <Link to="/">Dropdown here</Link>
      </NavbarDropdownContent>
    </NavbarDropdown>
  );
};