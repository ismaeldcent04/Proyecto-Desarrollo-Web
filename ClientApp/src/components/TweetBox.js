import React from "react";
import "../TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbiMjUoOxJCAMB9poSO2wLg34m7OxmyaT-A&usqp=CAU" />
                    <input type="text" placeholder="What's happening?" />
                </div>
                <input
                    className="tweetBox_imageinput"
                    placeholder="Optional: Enter image URL"
                    type="text"
                />
                <Button className="tweetBox__button">Tweet</Button>
            </form>
        </div>
    );
}
export default TweetBox;
