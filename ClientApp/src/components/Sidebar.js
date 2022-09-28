import React from "react";
import "../Sidebar.css";
import SidebarOption from "./SidebarOption";
import SchoolIcon from '@material-ui/icons/School';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MoreOutlinedIcon from '@material-ui/icons/MoreOutlined';
import { Button } from "@material-ui/core";

function Sidebar() {


    return (
        <div className="sidebar">
            {/*Icon*/}
            <SchoolIcon className="appLogo" />
            {/*SidebarOptions*/}
            <SidebarOption active text="Home" href="/" Icon={HomeOutlinedIcon} />
            <SidebarOption text="Explore" href="/explore" Icon={ExploreOutlinedIcon}/>
            <SidebarOption text="Messages" Icon={EmailOutlinedIcon} />
            <SidebarOption text="Bookmarks" Icon={BookmarkBorderOutlinedIcon} />
            <SidebarOption text="Profile" href="/profile" Icon={PersonOutlineOutlinedIcon} />
            <SidebarOption text="More" Icon={MoreOutlinedIcon} />

            {/*TweetButton*/}
            <Button variant="outlined" className="sidebarButton" fullWidth>
                Tweet
            </Button>


          
        </div>
    );
}

export default Sidebar;