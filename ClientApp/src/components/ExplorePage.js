import React from "react";
import Sidebar from "./Sidebar"
import HomePageFeed from "./HomePageFeed"
import "../Page.css";
import Widgets from "./Widgets"

function ExplorePage(){
    return (
        <div className="app">
            <Sidebar />
            <HomePageFeed />
            <Widgets/>
        </div>
        )
}

export default ExplorePage