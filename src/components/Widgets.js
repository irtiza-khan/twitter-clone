 import React from 'react'
 import {Input} from  'reactstrap'
 import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";
  import SearchIcon from "@material-ui/icons/Search";
 const Widgets = props => {
     return (
         <div className="widgets">
              <div className="widgets__input">
                  <SearchIcon  className="widgets__searchIcon"/>
                  <Input placeholder="Search Twitter"  type="text" />
                  
              </div>

              <div className="widgets__widgetContainer">
                <h2>What's Happening</h2>
                <TwitterTweetEmbed tweetId={"1364857481185271808"} />
                <TwitterTimelineEmbed 
                  sourceType="profile"
                  screenName="elonmusk"
                  options={{ height: 400 }} />
              </div>
            
         </div> 
     )
 }
 

 
 export default Widgets
 