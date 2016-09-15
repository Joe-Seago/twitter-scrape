import React from 'react'

var Tweet = (props) => {
  return (
    <div className="tweet-box">
      <img src={props.pic} alt="Profile Pic" />
      <h4 className="tweet-text">{props.text}</h4>
      <h3>-@{props.handle}</h3>
      <h3>Followers: {props.followers}</h3>
    </div>
  )
}

export default Tweet
