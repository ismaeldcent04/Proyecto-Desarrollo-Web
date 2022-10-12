import "../CSS/Feed.css";
import TweetBox, { posts } from "./TweetBox";
import Post from "./Post";
import { useState, useEffect } from "react";

function HomePageFeed() {
    console.log(posts);
    const [tweets, setTweets] = useState([]);

    const ShowTweets = async () => {
        const response = await fetch(
            "http://samuelch-001-site1.btempurl.com/api/Tweet/MostrarTweets"
        );
        if (response.ok) {
            const data = await response.json();
            setTweets(data.response);
        } else {
            console.log("status code:" + response.status);
        }
    };

    useEffect(() => {
        ShowTweets();
    }, []);
    return (
        <div className="feed">
            {/*csabvbc*/ }
            {/*HEADER */}
            <div className="feed_header">
                <h2>Home</h2>
            </div>

            {/*TWEETBOX*/}
            <TweetBox />

            {/*POSTS */}

            {tweets.map((tweet) => {
                return (
                    <Post
                        key={tweet.idTweet}
                        avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbiMjUoOxJCAMB9poSO2wLg34m7OxmyaT-A&usqp=CAU"
                        displayName={tweet["idUsuarioNavigation"]["nombreCompleto"]}
                        username={tweet["idUsuarioNavigation"]["nombreUsuario"]}
                        verified={true}
                        image={tweet.gif}
                        text={tweet.descripción}
                    />
                );
            })}
        </div>
    );
}
    
export default HomePageFeed;