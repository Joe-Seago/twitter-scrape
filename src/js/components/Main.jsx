import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import TweetList from './TweetList'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.getTweets = this.getTweets.bind(this)
  }

  getTweets(userInput) {
    // TODO: Functionality for fetchGetTweets() action
    let userSearch = this.refs.userSearch.value
    this.props.dispatch(actions.fetchGetTweets(userSearch))
  }

  render() {
    return (
      <h1>BIG IMAGE STUFF</h1>
      <input type="text" ref="userSearch" placeholder='"JavaScript", "React.js", "Bill Cosby"' />
      <button onClick={this.getTweets}>Search</button>
      <TweetList />
    )
  }
}

var mapStateToProps = (state,props) => {
  return {
    // TODO: State
  }
}

export default connect(mapStateToProps)(Main)
