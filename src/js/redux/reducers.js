import * as actions from './actions'

const initialState = {
  tweets: []
}

var AppReducer = (state, action) => {
  state = state || initialState

  if (action.type === actions.FETCH_GET_TWEETS_SUCCESS) {
    return Object.assign({}, state, {
      tweets: action.tweets
    })
  }

  return state
}

export default AppReducer
