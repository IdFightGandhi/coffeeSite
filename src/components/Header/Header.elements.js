import styled from 'styled-components';


export const Border = styled.div `
background-color: black;
box-sizing: border-box;
/* display: flex; */
height: 40px;
position: absolute;
z-index: 1;
width: 100%;

`


export const TransparentNavWrapper = styled.div `
margin: 0;
padding: 0;
z-index: 1;
border-top: 60px solid black;
margin-left:7em;
`

export const TransparentNavBar = styled.nav `
position: absolute;
justify-content: center;
display: flex;
width: 100%;
height: 10px;
/* margin-top: 10vh; */
/* padding: 0px 90px; */
box-sizing: border-box;
background: transparent;
z-index:1;

`

export const TransparentNavItem = styled.ul`

list-style: none;
justify-content: center;
margin: 100px 40px;
/* display: flex; */
justify-content: space-between;
color: grey;
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

// export const Navbar: React.FC = () => {
//   return (
//     <NavbarDropdown>
//       <span>Menu</span>
//       <NavbarDropdownContent>
//         <Link to="/">Dropdown here</Link>
//       </NavbarDropdownContent>
//     </NavbarDropdown>
//   );
// };