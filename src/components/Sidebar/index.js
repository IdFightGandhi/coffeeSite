import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {
    Nav,
    NavIcon,
    SidebarNav,
    SidebarWrap,
    LogoIcon,
    Spacer

} from './Sidebar.elements'
import { SidebarData } from './SidebarData'
import SubMenu from './SubMenu'
import { IconContext } from 'react-icons/lib'


//This is the javascript that creates the disappearing sidebar menu.

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
        {/* Here is the hamburger icon with an onClick function which opens the sidebar */}
        
        <IconContext.Provider value={{ color: 'black'}}>
            <LogoIcon id="nav-logo">
                <FaIcons.FaCoffee />
            </LogoIcon>
            
            <Nav id="hamburger">
                <NavIcon to="#">
                    <FaIcons.FaBars onClick={showSidebar} />
                </NavIcon>
            </Nav>
            {/* When the sidebar opens, hamburger turns into an X */}
            <SidebarNav sidenav={sidebar}>
                <SidebarWrap>
                <NavIcon to="#">
                    <AiIcons.AiOutlineClose onClick={showSidebar} /> 
                </NavIcon>
                {/* This comes from the SidebarData file which maps through the choices and displays */}
                {SidebarData.map((item, index) => {
                    return<SubMenu item={item} key={index} />
                })}
                </SidebarWrap>
                <Spacer />
            </SidebarNav>

            </IconContext.Provider>
            
        </>
    )
}

export default Sidebar
