import * as actions from './actions'

/*==== HARD CODED STATE ===*/
const initialState = {
  tweets: [
            {
              realname: 'Odell Wreck\'em',
              handle: 'iSellDreamZ',
              location: 'FL',
              followers: 1211,
              profilepic: 'http://pbs.twimg.com/profile_images/766800780389122048/WJ9-ZSuJ_normal.jpg',
              created: 'Wed Apr 15 13:40:08 +0000 2009',
              tweet: 'RT @COCOtheVIRGO: Kanye West is truly iconic.'
            },
            {
              realname: 'The Many Hands™ God',
              handle: 'LawdMegatron',
              location: 'CLEVELAND',
              followers: 1168,
              profilepic: 'http://pbs.twimg.com/profile_images/771439620252962816/HgpcDOay_normal.jpg',
              created: 'Wed Mar 31 13:28:40 +0000 2010',
              tweet: 'NOW THAT iTHINK ABOUT IT THO.... WHAT OTHER INJURIES DID KANYE SUSTAIN IN THAT CAR ACCIDENT?'
            }
         ]
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
