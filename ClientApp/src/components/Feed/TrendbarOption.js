import React from "react";
import "../CSS/Feed.css";
import { Button } from "@material-ui/core";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


function TrendbarOption({theme,Title,amountTweets }) {
    return (
        <div className="feed">
            <Button className="trend_bar">
                <div className="trendBar__first">
                    <p>{theme }</p>
                    <MoreHorizIcon className="trendmore_icon" />
                </div>
                <h4>{Title }</h4>
                <p>{ amountTweets} Tweets</p>
            </Button>
        </div>
        )
}
export default TrendbarOption;