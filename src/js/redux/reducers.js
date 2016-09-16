import * as actions from './actions'

/*==== HARD CODED STATE ===*/
const initialState = {
  tweets: [],
  method: ''
}

var AppReducer = (state, action) => {
  state = state || initialState

  if (action.type === actions.FETCH_GET_TWEETS_SUCCESS) {
    return Object.assign({}, state, {
      tweets: action.tweets || [
          {
            realname: 'Error',
            handle: 'aint_work',
            location: 'who knows',
            followers: 404,
            profilepic: 'http://pbs.twimg.com/profile_images/498731546874892288/scTkrbtI_normal.jpeg',
            created: 'Thu Dec 01 09:36:23 +0000 2011',
            tweet: 'Somethings wrong bruh'
          }
       ]
    })
  } else if (action.type === actions.SORT_OPTION) {
    return Object.assign({}, state, {
      method: action.option
    })
  }

  return state
}

export default AppReducer
