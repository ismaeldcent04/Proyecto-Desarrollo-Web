import React from "react";
import Post from "./Post";
import "../CSS/Feed.css";
import { posts } from "./HomePageFeed";

function BookmarksFeed(props) {
  return (
    <div className="feed">
      {/*HEADER*/}
      <div>
        <div className="feed_header">
          <h2>Bookmarks</h2>
          <div className="profile_details">
            <h4>@{props.username}</h4>
          </div>
        </div>
      </div>
      {/*POSTS BOOKMARKED*/}
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
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
export default BookmarksFeed;
