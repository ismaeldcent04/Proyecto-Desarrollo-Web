import React from "react"
import Post from "./Post"
import { posts } from "./HomePageFeed"
import ProfileDescription from "./ProfileDescription"
import "../CSS/Feed.css"




function ProfilePageFeed() {
    return (<div clasName="feed">
        <ProfileDescription
            avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbiMjUoOxJCAMB9poSO2wLg34m7OxmyaT-A&usqp=CAU"
            displayName="Ismael Dicent"
            username="ismaeldcent04"
            datejoined="May 2020"
            amount="70"
            followers="71"
            following="50"

        />
        {posts.map(post => {
            return (
                <Post
                    key={post.id}
                    avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbiMjUoOxJCAMB9poSO2wLg34m7OxmyaT-A&usqp=CAU"
                    displayName="Ismael Dicent"
                    username="ismaeldcent04"
                    verified={true}
                    image={post.imageURL}
                    text={post.inputText}
                />)
        })}
        </div>
     )
         
         
      
};
export default ProfilePageFeed;