import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {
    SidebarLink,
    SidebarLabel
}from './Sidebar.elements'


const SubMenu = ({ item }) => {
    return (
        <>
        <SidebarLink to={item.path}>
            <div>
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
            </div>
        </SidebarLink>
            
        </>
    )
}

export default SubMenu
