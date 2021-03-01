import React from 'react'
import  {FaTwitter} from 'react-icons/fa';
import SidebarOptions from './SidebarOptions'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExploreOffOutlinedIcon from '@material-ui/icons/ExploreOffOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import {Button} from  'reactstrap'
const Sidebar = props => {
    return (
        <div className="sidebar">
            <FaTwitter className="sidebar___twitterIcon" />
          
           <SidebarOptions active Icon={HomeOutlinedIcon} text="home" />
           
           <SidebarOptions Icon={PersonOutlineIcon}text="Profile" />

           <SidebarOptions Icon={ExploreOffOutlinedIcon} text="Explore" />
           
           <Button  outline size="lg" block className="sidebar__tweet " >Tweet</Button>
           
            
        </div> 
    )
}



export default Sidebar;
