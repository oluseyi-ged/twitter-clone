import React, { useState } from "react"
import "./Feed.css"
import TweetBox from "./TweetBox"
import Post from "./Post"

function Feed() {
  const [posts, setPosts] = useState([])

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/* tweet box */}
      <TweetBox />

      <Post
        displayName="odd developer"
        username="royGED"
        verified
        text="Jack come outside"
        avatar="https://res.cloudinary.com/odd-developer/image/upload/v1627925104/P8iXlJ7x_400x400_f7xbus.jpg"
        image="https://media0.giphy.com/media/xUPGcs9dVGUrB4MkbC/200w.webp?cid=ecf05e47gddzj0oo9brv4p85o5kd98546qf8t1d5pzx7fxyg&rid=200w.webp&ct=g"
      />
    </div>
  )
}

export default Feed
