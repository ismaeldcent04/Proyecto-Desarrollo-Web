import React, { useState, useEffect } from "react"
import "../CSS/Sidebar.css"
import { Button, Avatar } from "@material-ui/core";

function SidebarProfileButton({ nombreCompleta, nombreUsuario }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('oUsuario'));
        if (items) {
            setItems(items);
        }
    }, []);
    return (
        <Button className="sidebar_profileButton">
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbiMjUoOxJCAMB9poSO2wLg34m7OxmyaT-A&usqp=CAU" className="sidebar_avatarIcon" />
            <div className="sidebar_profileText">
                <p>{sessionStorage.getItem("nombreUsuario")}</p>
                <p>{sessionStorage.getItem("nombreCompleto")}</p>
            </div>
            
        </Button>
        )
}
export default SidebarProfileButton;