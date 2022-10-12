import React from "react";
import "../CSS/Feed.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import { Avatar, Button } from "@material-ui/core";

function ProfileDescription({
  displayName,
  username,
  avatar,
  datejoined,
  amount,
  following,
  followers,
}) {
  return (
    <div className="profile_description">
      <div className="profileFeed_header">
        <a href="/">
          <ArrowBackIcon className="icon" />
        </a>
        <div className="top_text">
          <h2>{username}</h2>
          <h4>{amount} Tweets</h4>
        </div>
      </div>

      <div className="portrait">
        <div>
          <Avatar src={avatar} className="profile_image" />
        </div>
      </div>
      <Button className="settings_button">Set up profile </Button>
      <div className="profile_details">
        <div>
          <h2>{displayName}</h2>
          <h4>@{username}</h4>
        </div>
        <div className="profile_detailDate">
          <CalendarTodayOutlinedIcon />
          <h4>Joined {datejoined}</h4>
        </div>
        <div className="profile_detailFollow">
          <h4>
            <span>{following}</span> Following
          </h4>
          <h4>
            <span>{followers}</span> Followers
          </h4>
        </div>
        <div className="profile_panel">
          <Button className="profile_panelButton">Tweets</Button>
          <Button className="profile_panelButton">Tweets & replies</Button>
          <Button className="profile_panelButton">Likes</Button>
        </div>
      </div>
    </div>
  );
}
export default ProfileDescription;
