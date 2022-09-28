import React from "react";
import "../sidebarOption.css";
import { Avatar } from "@material-ui/core";

function SidebarOption({ active, text, Icon, avatar,href }) {
    return (
            <a className={`sidebarOption ${active && "sidebarOption--active"}`} href={href }> <Icon className="icons" />
                <h2>{text}</h2>
            </a>
           );
}
export default SidebarOption;

