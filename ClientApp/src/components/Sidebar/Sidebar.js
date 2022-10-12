import React from "react";
import "../CSS/Sidebar.css";
import SidebarOption from "./SidebarOption";
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MoreOutlinedIcon from '@material-ui/icons/MoreOutlined';
import { Button} from "@material-ui/core";
import SidebarProfileButton from "./SidebarProfileButton";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Sidebar({ avatar, nombreUsuario, displayName }) {


    return (
        <div className="sidebar">
            {/*Icon*/}
            <TwitterIcon className="appLogo" />
            {/*SidebarOptions*/}
            <SidebarOption active text="Home" href="/home" Icon={HomeOutlinedIcon} />
            <SidebarOption text="Explore" href="/explore" Icon={ExploreOutlinedIcon} />
            <SidebarOption text="Messages" href="#" Icon={EmailOutlinedIcon} />
            <SidebarOption text="Bookmarks" href="#" Icon={BookmarkBorderOutlinedIcon} />
            <SidebarOption text="Profile" href="/profile" Icon={PersonOutlineOutlinedIcon} />
            <SidebarOption text="More" href="#" Icon={MoreOutlinedIcon} />
            <SidebarOption text="Sign out" href="/" onClick={() =>  sessionStorage.removeItem("")} Icon={ExitToAppIcon} />

            {/*TweetButton*/}
            <Button variant="outlined" className="sidebarButton" fullWidth>
                Tweet
            </Button>
            {/*Profile_Twitterbutton*/}
            <SidebarProfileButton nombreUsuario={sessionStorage.getItem("nombreUsuario")} nombreCompleta={sessionStorage.getItem("nombreCompleto")} />           
        </div>
    );
}

export default Sidebar;