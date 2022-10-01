import "../CSS/Feed.css";
import TweetBox, { posts } from "./TweetBox";
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
    );
}
    
export default HomePageFeed;