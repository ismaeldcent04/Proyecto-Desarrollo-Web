import React, { useState } from "react";
import "../CSS/Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
const posts = [
    {
        id: 1,
        inputText: "i'm trying but i'm going to do it right",
        imageURL: "https://media.giphy.com/media/zf0OLApSzC84M2juyC/giphy.gif",
    },
];
function HomePageFeed() {

    const [newPost, setPost] = useState(posts);

    function addPost(newpost) {
        setPost(prevPost => {
            return [newpost, ...prevPost];
        })
    }
  return (
    <div className="feed">
      {/*HEADER */}
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      {/*TWEETBOX*/}
          <TweetBox onAddPost={addPost}/>

      {/*POSTS */}

      {newPost.map((post,index) => {
        return (
          <Post
            key={index}
            avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbiMjUoOxJCAMB9poSO2wLg34m7OxmyaT-A&usqp=CAU"
            displayName="Ismael Dicent"
            username="ismaeldcent04"
            verified={true}
            image={post.imageURL}
            text={post.inputText}
          />
        );
      })}
    </div>
  );
}

export default HomePageFeed;
export { posts };
