import React from 'react';
import './SideBar.css';

const DrawerActions = [
    { title: 'Home', icon: '' ,path: "/home"},
    { title: 'Category', icon: '',path: "/category" },
    { title: 'About Us', icon: '',path: "/aboutus" },
    { title: '', icon: '' },
]

const SideBar = () => {
    return (
        <div className='sideBar'>
            <header className='Sidebar-title'>My App</header>
            <ul>
                {DrawerActions.map((item, i) => {
                    return (
                        <li key={i} className='row'>
                            <img src={item.icon} className='drawer-icon' />
                            <h4 className='drawer-title'>{item.title}</h4>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SideBar