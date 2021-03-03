import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";



function Post({displayName,username,verifed,timestamp,text,image,avatar}) {
    return (
        <div className="post">
            <div className="post__avatar">
              <Avatar />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Iritza khan {" "} 
                            <span className="post__headerSpecial">
                                <VerifiedUserIcon   className="post__badge" /> 
                                @itsIrtiza
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>This is a Twitter clone build from react js</p>
                    </div>
                </div>
                <img src="http://i.stack.imgur.com/SBv4T.gif" alt=""/>

                <div className="post__footer">
                <ChatBubbleOutlineIcon fontSize="small" />
                <RepeatIcon fontSize="small" />
                <FavoriteBorderIcon fontSize="small" />
                <PublishIcon fontSize="small" />

                </div>
            </div>
        </div>
    )
}

export default Post;
