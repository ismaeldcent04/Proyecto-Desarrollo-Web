import React from "react";
import Sidebar from "./Sidebar"
import ProfilePageFeed from "./ProfilePageFeed"
import Widgets from "./Widgets"


function ProfilePage() {

    return (
        <div className="app">
            <Sidebar />
            <ProfilePageFeed />
            <Widgets/>
        </div>
    )
}
export default ProfilePage;