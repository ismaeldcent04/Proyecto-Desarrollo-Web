import React   from "react";
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
            <Post
                avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbiMjUoOxJCAMB9poSO2wLg34m7OxmyaT-A&usqp=CAU"
                displayName="Ismael Dicent"
                username="ismaeldcent04"
                verified={true}
                image="https://media.giphy.com/media/U2MB1tuNQ6C72zJays/giphy-downsized-large.gif"
                text="Yoo it's working"
            />

        </div>
    );
}

export default Feed;