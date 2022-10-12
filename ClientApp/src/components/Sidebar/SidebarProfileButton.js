import React from "react"
import "../CSS/Sidebar.css";
import { Button, Avatar } from "@material-ui/core";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function SidebarProfileButton() {
    return (
        <Button className="sidebar_profileButton" onClick={(e) => {
            e.preventDefault();
            window.location.href = "/profile";
        }}>
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbiMjUoOxJCAMB9poSO2wLg34m7OxmyaT-A&usqp=CAU" className="sidebar_avatarIcon" />
            <div className="sidebar_profileText">
                <h5>{sessionStorage.getItem("nombreCompleto")}</h5>
                <h6>{sessionStorage.getItem("nombreUsuario")}</h6>
            </div>
            <MoreHorizIcon className="more_icon" />
        </Button>
    )
}
export default SidebarProfileButton;