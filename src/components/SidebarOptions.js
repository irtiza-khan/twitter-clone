import React from 'react'
import  {FaTwitter , FaHome,FaSearch} from 'react-icons/fa';

const SidebarOptions = ({active, text , Icon, onClick}) => {
    return (
        <div className={`sidebarOption ${active
         && 'sidebarOption--active'}` }>
           <Icon onClick={onClick}/>
           <h2>{text}</h2>
        </div>
    )
}



export default SidebarOptions;
