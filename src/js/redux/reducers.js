import * as actions from './actions'

/*==== HARD CODED STATE ===*/
const initialState = {
  tweets: [
      {
        realname: 'cumiho',
        handle: 'cumihomo',
        location: 'Indonesia',
        followers: 511,
        profilepic: 'http://pbs.twimg.com/profile_images/498731546874892288/scTkrbtI_normal.jpeg',
        created: 'Thu Dec 01 09:36:23 +0000 2011',
        tweet: '"Thought you\'d buy yourself an iPhone 7 on Friday? Too bad, UK" https://t.co/jj7oHDvAL1'
      },
      {
        realname: 'billck',
        handle: 'billck',
        location: 'Gardner, KS',
        followers: 2513,
        profilepic: 'http://pbs.twimg.com/profile_images/661708465656561664/kcAf4qgU_normal.jpg',
        created: 'Sun Oct 26 01:18:03 +0000 2008',
        tweet: 'RT @BoSnerdley: Apple says initial quantities of iPhone 7 Plus sold out https://t.co/GM4Cy2khvh via @Reuters'
      },
      {
        realname: 'iPhoneNewsCollector',
        handle: 'iphone_nc_eng',
        location: '',
        followers: 5695,
        profilepic: 'http://pbs.twimg.com/profile_images/770695632/apple-iphone_normal.jpg',
        created: 'Tue Mar 23 18:12:19 +0000 2010',
        tweet: 'Engadget: ESA\'s Gaia satellite mapped a billion stars in the Milky Way https://t.co/paJTs7muZq'
      },
      {
        realname: 'Othniel F Mijares S',
        handle: 'parecerleer',
        location: 'CDMX',
        followers: 2010,
        profilepic: 'http://pbs.twimg.com/profile_images/2352371539/jdwcqsw8b0x8su3bd4xo_normal.jpeg',
        created: 'Sun Oct 24 14:47:45 +0000 2010',
        tweet: 'UK Approves EDF’s £18 Billion Hinkley Point Nuclear Project - Connected for iPhone  https://t.co/KEnIlEmx31'
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
