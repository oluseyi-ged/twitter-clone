import { Avatar, Button } from "@material-ui/core"
import React, { useState } from "react"
import "./TweetBox.css"
import db from "./firebase"

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("")
  const [tweetImage, setTweetImage] = useState("")

  const sendTweet = (e) => {
    e.preventDefault()

    db.collection("posts").add({
      displayName: "odd developer",
      username: "royGED",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://res.cloudinary.com/odd-developer/image/upload/v1627925104/P8iXlJ7x_400x400_f7xbus.jpg",
    })

    setTweetMessage("")
    setTweetImage("")
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://res.cloudinary.com/odd-developer/image/upload/v1627925104/P8iXlJ7x_400x400_f7xbus.jpg"></Avatar>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          className="tweetBox__imageInput"
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          placeholder="Optional: Enter Image Url"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  )
}

export default TweetBox
