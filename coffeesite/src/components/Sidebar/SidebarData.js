import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
     {
        title: 'Overview',
        path: '/overview',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpFill />,
        subNav: [
            {
                title: 'Users',
                path: 'overview/users',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Users',
                path: 'overview/revenue',
                icon: <IoIcons.IoIosPaper />,
            },
        ]

    },
    {
        title: 'Store',
        path: '/store',
        icon: <AiIcons.FaCartPlus />,
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
   
]