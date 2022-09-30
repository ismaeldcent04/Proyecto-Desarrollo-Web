import React, { useState} from "react";
import "../Feed.css";
import TweetBox, { posts }  from "./TweetBox";
import Post from "./Post";

function HomePageFeed() {
    console.log(posts);
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
               key={posts.id}
               avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbiMjUoOxJCAMB9poSO2wLg34m7OxmyaT-A&usqp=CAU"
               displayName="Ismael Dicent"
               username="ismaeldcent04"
               verified={true}
               image={posts.imageURL}
               text={posts.inputText}
              />

        </div>
    );
}
    
export default HomePageFeed;