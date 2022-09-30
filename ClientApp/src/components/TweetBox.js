import React, {useState} from "react";
import "../TweetBox.css";
import { Avatar, Button } from "@material-ui/core";



const posts = {
    id:1,
    inputText:"I'm trying but I'm going to do it right",
    imageURL:"https://media.giphy.com/media/nmBKiNb7h3tIv3BO8D/giphy.gif"
}


function TweetBox() {


    const [inputText, setinputText] = useState("");
    const [inputimage, setinputimage] = useState("");
   
 

    function handleonchangetext(event) {
        setinputText(event.target.value);
    }
    function handleonchangeimage(event) {
        setinputimage(event.target.value)
    }
    {
         /*  function handleclick(event) {
            setpost(prevvalue => {
                return [{ ...prevalue }]
            })

        }
        */
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbiMjUoOxJCAMB9poSO2wLg34m7OxmyaT-A&usqp=CAU" />
                    <input onChange={handleonchangetext} value={inputText} type="text" placeholder="What's happening?" />
                </div>
                <input
                    value={inputimage }
                    onChange = { handleonchangeimage}
                    className="tweetBox_imageinput"
                    placeholder="Optional: Enter image URL"
                    type="text"
                />
                <Button  type="submit" className="tweetBox__button">Tweet</Button>
            </form>
        </div>
    );
}
export default TweetBox;
export { posts};

