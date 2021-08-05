import { Avatar } from "@material-ui/core"
import React from "react"
import "./Post.css"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import RepeatIcon from "@material-ui/icons/Repeat"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined"

function Post({ displayName, verified, username, text, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://res.cloudinary.com/odd-developer/image/upload/v1627925104/P8iXlJ7x_400x400_f7xbus.jpg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              odd developer
              <CheckCircleIcon className="post__badge" />
              <span>@royged</span>
            </h3>
            <div className="post__headerDescription">
              <p>10th clone... thought i'd make it twitter</p>
            </div>
          </div>
          <img
            src="https://media4.giphy.com/media/VbnXItjZpCzC3zO84Z/200w.webp?cid=ecf05e47i6cgd6lgfnytg4jsd2x7ygosl3p2x5cmptnmhfzk&rid=200w.webp&ct=g"
            alt=""
          />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishOutlinedIcon fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
