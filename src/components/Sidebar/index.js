import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {
    Nav,
    NavIcon,
    SidebarNav,
    SidebarWrap,
    LogoIcon,
    Spacer,
    SidebarContainer

} from './Sidebar.elements'
import { SidebarData } from './SidebarData'
import SubMenu from './SubMenu'
import { IconContext } from 'react-icons/lib'


//This is the javascript that creates the disappearing sidebar menu.

function Sidebar(props) {
    return (
        <>
        {/* <SidebarContainer> */}
        {/* Here is the hamburger icon with an onClick function which opens the sidebar */}
        
        <IconContext.Provider value={{ color: 'black'}}>
            <LogoIcon id="nav-logo">
                <FaIcons.FaCoffee />
            </LogoIcon>
            
            <Nav id="hamburger">
                <NavIcon to="#">
                    <FaIcons.FaBars onClick={props.onClickFunction} />
                </NavIcon>
            </Nav>
            {/* When the sidebar opens, hamburger turns into an X */}
            

            </IconContext.Provider>
        {/* </SidebarContainer> */}
        </>
        
    )
}

export default Sidebar
