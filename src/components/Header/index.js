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
            <Border id="black-border" />

                <TransparentNavBar id="navbar">
                    <TransparentNavItem id="coffee-tab">Test</TransparentNavItem>
                    <TransparentNavItem id="coffee-maker-tab">Test</TransparentNavItem>
                    <TransparentNavItem id="accessory-tab">Test</TransparentNavItem>

                </TransparentNavBar>
            </TransparentNavWrapper>
            
        </>
      
    )
}

export default Header
