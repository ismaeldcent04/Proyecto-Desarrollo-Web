import React, {useState} from "react";
import "../CSS/TweetBox.css";
import { Avatar, Button } from "@material-ui/core";



const posts = [
    {
        id: 1,
        inputText: "i'm trying but i'm going to do it right",
        imageURL: "https://media.giphy.com/media/zf0OLApSzC84M2juyC/giphy.gif"
    }
];

/*const posts = [];*/

function TweetBox() {

    const [inputmessage, setinputText] = useState("");
    const [inputImage, setinputImage] = useState("");
 
    

    function handleonchangetext(event) {
        setinputText(event.target.value);
    }
    function handleonchangeImage(event) {
        setinputImage(event.target.value);
    }

    function handleclick(event) {
        const post = {
            inputText: inputmessage,
            imageURL: inputImage
        }
  
        posts.push(post);
    }
     
    
    return (
        <div className="tweetBox">
            <form >
                <div className="tweetBox__input">
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbiMjUoOxJCAMB9poSO2wLg34m7OxmyaT-A&usqp=CAU" />
                    <input value={inputmessage } onChange={handleonchangetext} type="text" placeholder="What's happening?" />
                </div>
                <input
                    value={inputImage}
                    onChange={handleonchangeImage }
                    className="tweetBox_imageinput"
                    placeholder="Optional: Enter image URL"
                    type="text"
                />
                <Button onClick={handleclick} type="submit" className="tweetBox__button">Tweet</Button>
            </form>
        </div>
    );
}
export default TweetBox;
export { posts };

