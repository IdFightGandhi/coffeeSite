import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import {
    Nav,
    NavIcon,
    SidebarNav,
    SidebarWrap

} from './Sidebar.elements'
import { SidebarData } from './SidebarData'
import SubMenu from './SubMenu'
import { IconContext } from 'react-icons/lib'




const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
        <IconContext.Provider value={{ color: 'black'}}>
            <Nav id="hamburger">
                <NavIcon to="#">
                    <FaIcons.FaBars onClick={showSidebar} />
                </NavIcon>
            </Nav>
            <SidebarNav sidenav={sidebar}>
                <SidebarWrap>
                <NavIcon to="#">
                    <AiIcons.AiOutlineClose onClick={showSidebar} /> 
                </NavIcon>
                {SidebarData.map((item, index) => {
                    return<SubMenu item={item} key={index} />
                })}
                </SidebarWrap>
            </SidebarNav>
            </IconContext.Provider>
            
        </>
    )
}

export default Sidebar
