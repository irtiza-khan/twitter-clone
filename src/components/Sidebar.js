import React from 'react'
import { FaTwitter, FaHome } from 'react-icons/fa';
import { IconContext } from "react-icons"; 
import SidebarOptions from './SidebarOptions'

const Sidebar = props => {
    return (
        <div className="sidebar">
            <FaTwitter />
            <FaHome />
           

           <SidebarOptions text="home" />
           
           <SidebarOptions text="Profile" />

           <SidebarOptions text="Explore" />
           
        </div> 
    )
}



export default Sidebar
