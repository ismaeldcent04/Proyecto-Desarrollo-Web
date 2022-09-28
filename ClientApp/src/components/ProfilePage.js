import React from "react";
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import Widgets from "./Widgets"

function ProfilePage() {

    return (
        <div className="app">
            <Sidebar />
            <Feed />
            <Widgets/>
        </div>
    )
}
export default ProfilePage;