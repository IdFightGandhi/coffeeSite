import React from 'react'
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
    return (
        <>
            <Nav>
                <NavIcon to="#">
                    <FaIcons.FaBars />
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
