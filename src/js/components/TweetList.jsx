import React from 'react'
import { connect } from 'react-redux'
import Tweet from './Tweet'


class TweetList extends React.Component {

  render() {
    console.log(this.props.tweets, "<--- tweets state")

    let sortedByFollowers = this.props.tweets.sort(function(obj1, obj2) {
      return obj2.followers - obj1.followers
    })
    let that = this
    let tweets = Object.keys(sortedByFollowers).map(function(obj, index) {
      let tweet = that.props.tweets[obj]

      return (
        <li key={index}>
          <Tweet text={tweet.tweet} handle={tweet.handle} followers={tweet.followers} pic={tweet.profilepic} />
        </li>
      )
    })

    return(
      <div>
        <ul className="tweet-list">
          {tweets}
        </ul>
      </div>
    )
  }
}

var mapStateToProps = (state, props) => {
  return {
    tweets: state.tweets
  }
}

export default connect(mapStateToProps)(TweetList)
