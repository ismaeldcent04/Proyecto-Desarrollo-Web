import { Avatar } from "@material-ui/core";
import React from "react";
import "../Post.css"
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({displayName, username,verified,timestamp,text, avatar }) {
    return (
            <div className="post">
                <div className="post_avatar">
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbiMjUoOxJCAMB9poSO2wLg34m7OxmyaT-A&usqp=CAU" />
                </div>
                <div className="post_body">
                    <div className="post_header">
                            <div className="post_headertext">
                                <h3>
                                 Ismael Dicent
                                    <span className="post_headerSpecial">
                                        <VerifiedUserIcon className="post_badge" />
                                        @ismaeldcent04
                                    </span> 
                                </h3>
                            </div>
                        <div className="post_headerDescription">
                            <p>I'm John Snow the 7th of his name, king of the andals and the heir of the iron throne</p>
                        </div>
                        <img src="https://media.giphy.com/media/xUjSOWCndCdECCyOEY/giphy.gif" alt="Groot" />
                        <div className="post_footer">
                            <ChatBubbleOutlineIcon fontSize="small"/>
                            <RepeatIcon fontSize="small" />
                            <FavoriteBorderIcon fontSize="small" />
                            <PublishIcon fontSize="small" />
                        </div>
                    </div>
                </div>
            </div>
          )
}

export default Post