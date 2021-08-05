import React from "react"
import "./Widget.css"
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed"
import SearchIcon from "@material-ui/icons/Search"

function Widget() {
  return (
    <div className="widget">
      <div className="widget__input">
        <SearchIcon className="widget__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widget__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed
          tweetId={"1421205582409777157"}
          options={{ theme: "dark" }}
        />
        <TwitterTweetEmbed
          tweetId={"1344388303123066887"}
          options={{ theme: "dark" }}
        />
        <TwitterTweetEmbed
          tweetId={"1400365660497235970"}
          options={{ theme: "dark" }}
        />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="royGED"
          options={{ height: 600 }}
        />
      </div>
    </div>
  )
}

export default Widget
