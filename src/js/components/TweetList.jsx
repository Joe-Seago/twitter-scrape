import React from 'react'
import { connect } from 'react-redux'
import Tweet from './Tweet'

class TweetList extends React.Component {
  let tweets = this.props.tweets
  console.log(tweets, "<--- tweets state")

  

  render() {
    return(
      <div>

      </div>
    )
  }
}

var mapStateToProps = (state, props) => {
  return {
    // TODO: Store state in reducer.js
    tweets: state.tweets
  }
}

export default connect(mapStateToProps)(TweetList)
