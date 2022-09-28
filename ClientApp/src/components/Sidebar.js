import React from "react";
import "../Sidebar.css";
import SidebarOption from "./SidebarOption";
import SchoolIcon from '@material-ui/icons/School';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import EmailIcon from "@material-ui/icons/Email";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import PersonIcon from "@material-ui/icons/Person";
import MoreIcon from "@material-ui/icons/More";
import { Button } from "@material-ui/core";

function Sidebar() {
    return (
        <div className="sidebar">
            {/*Icon*/}
            <SchoolIcon className="appLogo" />
            {/*SidebarOptions*/}
            <SidebarOption active text="Home" Icon={HomeIcon} />
            <SidebarOption text="Search" Icon={SearchIcon} />
            <SidebarOption text="Messages" Icon={EmailIcon} />
            <SidebarOption text="Bookmarks" Icon={BookmarkIcon} />
            <SidebarOption text="Profile" Icon={PersonIcon} />
            <SidebarOption text="More" Icon={MoreIcon} />

            {/*TweetButton*/}
            <Button variant="outlined" className="sidebarButton" fullWidth>
                Tweet
            </Button>
        </div>
    );
}

export default Sidebar;