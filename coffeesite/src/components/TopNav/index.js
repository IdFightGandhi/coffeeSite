import React from 'react'
import {
    TransparentNavWrapper,
    TransparentNavBar,
    TransparentNavItem
} from './TopNav.elements'

const TopNav = () => {
    return (
        <>
        <TransparentNavWrapper>
            <TransparentNavBar>
                <TransparentNavItem>Coffee</TransparentNavItem>
                <TransparentNavItem>Coffee Makers</TransparentNavItem>
                <TransparentNavItem>Accessories</TransparentNavItem>
            </TransparentNavBar>
        </TransparentNavWrapper>
        </>
    )
}

export default TopNav
