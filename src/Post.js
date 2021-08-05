import { Avatar } from "@material-ui/core"
import React from "react"
import "./Post.css"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import RepeatIcon from "@material-ui/icons/Repeat"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined"
import BarChartOutlinedIcon from "@material-ui/icons/BarChartOutlined"

function Post({ displayName, verified, username, text, avatar, image }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}

              {verified && <CheckCircleIcon className="post__badge" />}
              <span className="post__headerSpecial">@{username}</span>
            </h3>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishOutlinedIcon fontSize="small" />
            <BarChartOutlinedIcon fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
