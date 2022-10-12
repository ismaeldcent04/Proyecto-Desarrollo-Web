import React from "react";
import "../CSS/Widgets.css";
import "../CSS/Feed.css";
import SearchIcon from "@material-ui/icons/Search";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import TrendbarOption from "./TrendbarOption";
import Post from "./Post";
import { posts } from "./HomePageFeed";
import WhatshotIcon from "@material-ui/icons/Whatshot";

function ExplorePageFeed() {
  return (
    <div className="feed">
      {/*Search Bar*/}
      <div className="search_input">
        <SearchIcon className="widgets_searchIcon" />
        <input placeholder="Search Twitter" type="text" />
        <SettingsOutlinedIcon className="settings_icon" />
      </div>
      {/*News Image*/}
      <div className="news_image">
        <img
          alt="News"
          src="https://ichef.bbci.co.uk/news/976/cpsprodpb/A104/production/_124902214_hurricanespace.jpg.webp"
        />
        <h5>Entertainment . LIVE</h5>
        <h2>Forecasters predict a very active hurricane season</h2>
      </div>
      {/*Trends Section*/}
      <div className="trends_bars">
        <h3>Trends for you</h3>
      </div>
      <TrendbarOption
        theme="Politics  .  trending"
        Title="Putin"
        amountTweets="1.01M"
      />
      <TrendbarOption
        theme="Forecast  .  trending"
        Title="Fiona"
        amountTweets="137.01k"
      />
      <TrendbarOption
        theme="International  .  trending"
        Title="Biden"
        amountTweets="578.04"
      />
      <TrendbarOption
        theme="Sports  .  trending"
        Title="Ballon d'or"
        amountTweets="1.01M"
      />
      <TrendbarOption
        theme="LifeStyle  .  trending"
        Title="Dream House"
        amountTweets="7.08M"
      />
      <TrendbarOption
        theme="Technology  .  trending"
        Title="Iphone 14"
        amountTweets="12.41 M"
      />
      {/*Posts*/}
      <div className="popularvideos_header">
        <WhatshotIcon className="whasthot_icon" />
        <h3>Popular Videos</h3>
      </div>
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
export default ExplorePageFeed;
