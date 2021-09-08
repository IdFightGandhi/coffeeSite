import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
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




const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <Nav>
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
            
        </>
    )
}

export default Sidebar
