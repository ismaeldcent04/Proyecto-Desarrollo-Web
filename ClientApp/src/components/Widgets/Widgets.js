import React from "react";
import "../CSS/Widgets.css";
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTweetEmbed, TwitterTimelineEmbed } from "react-twitter-embed"


function Widgets() {

    return (
        <div className="widget">
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon" />
                <input placeholder="What do you need?" type="text"/>
            </div>
            <div className="widgets_widgetContainer">
                <h2>What's happening?</h2>
                <TwitterTweetEmbed tweetId={"1574897489005510656"} />
                <TwitterTimelineEmbed sourceType="profile" screenName="ismaeldcent04" options={{ height:400  }} />
                {/*<TwitterShareButton url={"https://twitter.com/ismaeldcent04"} options={{text:"#reactjs is awesome", via:"ismaeldcent04"} }/>*/}

            </div>
        </div>
    );
}

export default Widgets;