import React from "react";
import Sidebar from "../Sidebar/Sidebar"
import ExplorePageFeed from "../Feed/ExplorePageFeed"
import "../CSS/Page.css";
import Widgets from "../Widgets/Widgets"

function ExplorePage(){
    return (
        <div className="app">
            <Sidebar />
            <ExplorePageFeed />
            <Widgets/>
        </div>
        )
}

export default ExplorePage