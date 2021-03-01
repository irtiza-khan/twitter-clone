import React from 'react'
import  {FaTwitter , FaHome,FaSearch} from 'react-icons/fa';

const SidebarOptions = ({active, text , Icon}) => {
    return (
        <div className={`sidebarOption ${active
         && 'sidebarOption--active'}` }>
           <Icon />
           <h2>{text}</h2>
        </div>
    )
}



export default SidebarOptions;
