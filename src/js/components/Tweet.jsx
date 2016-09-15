import React from 'react'

var Tweet = (props) => {
  return (
    <div>
      <img src={props.image} alt="Profile Pic" />
      <h4>{props.text}</h4>
      <h3>-@{props.handle}</h3>
      <h3>Followers: {props.followers}</h3>
    </div>
  )
}

export default Tweet
