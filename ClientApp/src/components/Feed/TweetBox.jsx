import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import "../CSS/TweetBox.css";

function TweetBox(props) {
  const [inputimage, setInputImage] = useState("");
  const [textInput, setTextInput] = useState("");

  function textinputHandler(event) {
    setTextInput(event.target.value);
  }
  function imageinputHandler(event) {
    setInputImage(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
  }

  function clickHandler() {
    const postData = {
      inputText: textInput,
      imageURL: inputimage,
    };
    props.onAddPost(postData);
  }

  return (
    <div className="tweetBox">
      <form onSubmit={submitHandler}>
        <div className="tweetBox__input">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbiMjUoOxJCAMB9poSO2wLg34m7OxmyaT-A&usqp=CAU" />
          <input
            value={textInput}
            onChange={textinputHandler}
            placeholder="What's happening?"
          />
        </div>
        <input
          onChange={imageinputHandler}
          value={inputimage}
          className="tweetBox_imageinput"
          placeholder="Optional: Enter image URL"
        />
        <Button
          onClick={clickHandler}
          type="submit"
          className="tweetBox__button"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}
export default TweetBox;
