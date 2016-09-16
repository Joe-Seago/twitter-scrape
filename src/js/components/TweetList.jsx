import React from 'react'
import { connect } from 'react-redux'
import Tweet from './Tweet'


class TweetList extends React.Component {

  render() {
    console.log(this.props.tweets, '<--- tweets state')
    console.log(this.props.method, '<--search method')
    let that = this
    let sortTweets = this.props.tweets.sort(function(obj1, obj2) {

      if (that.props.method === 'Hearts') {
          return obj2.favorites - obj1.favorites
      } else if (that.props.method === 'Retweets') {
          return obj2.retweets - obj1.retweets
      } else if (that.props.method === 'Followers') {
          return obj2.followers - obj1.followers
      }
    })
    let tweets = Object.keys(sortTweets).map(function(obj, index) {
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
    tweets: state.tweets,
    method: state.method
  }
}

export default connect(mapStateToProps)(TweetList)
