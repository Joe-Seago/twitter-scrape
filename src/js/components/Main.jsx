import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import TweetList from './TweetList'
import Dropdown from 'react-dropdown'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.getTweets = this.getTweets.bind(this)
    this.onSelect = this.onSelect.bind(this)
  }

  getTweets(userInput) {
    let userSearch = this.refs.userSearch.value
    this.props.dispatch(actions.fetchGetTweets(userSearch))
  }

  onSelect(option) {
    this.props.dispatch(actions.sortOption(option.value))
  }

  render() {
    console.log(this.props.method, '<--Method')
    const options = ['Followers', 'Retweets', 'Hearts']
    const defaultOption = options[0]
    return (
      <div>
        <h1>Twitter Influencers</h1>
        <input className="search-bar" type="text" ref="userSearch" placeholder='"JavaScript", "React.js", "Bill Cosby"' />
        <h3>Arrange By: </h3>
        <div>
          <Dropdown options={options} onChange={this.onSelect} value={defaultOption} placeholder="Select" />
        </div>
        <button onClick={this.getTweets}>Search</button>
        <TweetList />
      </div>
    )
  }
}

var mapStateToProps = (state,props) => {
  return {
    method: state.method
  }
}

export default connect(mapStateToProps)(Main)
