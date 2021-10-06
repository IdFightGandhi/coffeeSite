import React from 'react'
import 
{
    Border,
    TransparentNavWrapper,
    TransparentNavBar,
    TransparentNavItem
    
} from './Header.elements';

function Header() {
    return (
        <>
            <TransparentNavWrapper id="nav-wrapper">            
            
                <TransparentNavBar id="navbar">
                    <TransparentNavItem id="coffee-tab">Coffee</TransparentNavItem>
                    <TransparentNavItem id="coffee-maker-tab">Coffee Makers</TransparentNavItem>
                    <TransparentNavItem id="accessory-tab">Accessories</TransparentNavItem>

                </TransparentNavBar>
            </TransparentNavWrapper>
            
        </>
      
    )
}

export default Header
