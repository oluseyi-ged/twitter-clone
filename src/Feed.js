import React, { useState, useEffect } from "react"
import "./Feed.css"
import TweetBox from "./TweetBox"
import Post from "./Post"
import db from "./firebase"
import FlipMove from "react-flip-move"

function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    )
  }, [])

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/* tweet box */}
      <TweetBox />

      <FlipMove>
        {posts.map(
          ({ displayName, verified, username, text, avatar, image }) => (
            <Post
              key={text}
              displayName={displayName}
              username={username}
              verified={verified}
              text={text}
              avatar={avatar}
              image={image}
            />
          )
        )}
      </FlipMove>
    </div>
  )
}

export default Feed
