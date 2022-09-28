import React from "react";
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import "../Page.css";
import Widgets from "./Widgets"

function ExplorePage(){
    return (
        <div className="app">
            <Sidebar />
            <Feed />
            <Widgets/>
        </div>
        )
}

export default ExplorePage