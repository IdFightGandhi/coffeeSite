import React from 'react'
import 
{
    Border,
    HeaderWrapper,
    TransparentNavWrapper,
    TransparentNavBar,
    TransparentNavItem
    
} from './Header.elements';

function Header() {
    return (
        <>
            <Border id="black-border" />
            <TransparentNavWrapper id="nav-wrapper">
                <TransparentNavBar>
                    <TransparentNavItem id="coffee-tab">Test</TransparentNavItem>
                    <TransparentNavItem id="coffee-maker-tab">Test</TransparentNavItem>
                    <TransparentNavItem id="accessory-tab">Test</TransparentNavItem>

                </TransparentNavBar>
            </TransparentNavWrapper>
            
        </>
      
    )
}

export default Header
