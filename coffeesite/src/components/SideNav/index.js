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



} from './SideNav.elements'




const SideNav = () => {
    const [sidenav, setSideNav] = useState(false)

    const showSideNav = () => setSideNav(!sidenav)
    return (
        <>
            <Nav>
                <NavIcon to="#">
                    <FaIcons.FaBars onClick={showSideNav} />
                </NavIcon>
            </Nav>
            <SidebarNav>
                <SidebarWrap>
                <NavIcon to="#">
                    <AiIcons.AiOutlineClose /> 
                </NavIcon>
                </SidebarWrap>
            </SidebarNav>
            
        </>
    )
}

export default SideNav
