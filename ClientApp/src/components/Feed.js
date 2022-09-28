import React from "react";
import "../Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed() {
    return (
        <div className="feed">
            {/*HEADER */}
            <div className="feed_header">
                <h2>Home</h2>
            </div>
            {/*TWEETBOX*/}
            <TweetBox />
            {/*POSTS */}
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Feed;