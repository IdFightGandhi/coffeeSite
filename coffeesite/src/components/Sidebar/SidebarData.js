import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
     {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpFill />,
       

    },
    {
        title: 'Store',
        path: '/store',
        icon: <FaIcons.FaCartPlus />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpFill />,
        subNav: [
            {
                title: 'Coffee',
                path: '/coffeeproducts',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Coffee Makers',
                path: '/coffeemakers',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Accessories',
                path: '/accessories',
                icon: <IoIcons.IoIosPaper />,
            },
        ]

    },
    {
        title: 'About',
        path: '/about',
        icon: <FaIcons.FaCartPlus />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpFill />,

    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <FaIcons.FaCartPlus />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpFill />,
       

    },
   
]