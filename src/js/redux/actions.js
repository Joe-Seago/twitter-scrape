import fetch from 'isomorphic-fetch'


/*------------- FETCH ACTIONS ---------------*/

const bearerToken = 'AAAAAAAAAAAAAAAAAAAAALXWwwAAAAAAONLagqR%2F63P75ZEQV1QnwsN4KLA%3DfKpXugdwO4dOdQVm73HdHa79AtKQHHFoSezm0Fn9FTLVUcq5Js'

// Retrieve tweets from Twitter API, arranged by users with most followers
export var fetchGetTweets = (userSearch) => {
  console.log("in fetchGetTweets, searching for...", userSearch)
  return (dispatch) => {
    // %20 represents spaces in user search
    const url = 'https://api.twitter.com/1.1/search/tweets.json?q=' + userSearch + '&lang=en&result_type=recent'
    const request = {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + bearerToken
      }
    }
    return fetch(url, request)
    .then((response) => {
      if (response.status < 200 || response.status >= 300) {
        const error = new Error(response.statusText)
        error.response = response
        throw error
      }
      return response.json()
    })
    .then((tweets) => {
      console.log(tweets, "<--Response Body")
      let tweetArray = []

      let filterTweets = (element, index, array) => {
        if(element.user.followers_count > 500) {
          tweetArray.push({
            realname: element.user.name,
            handle: element.user.screen_name,
            location: element.user.location,
            followers: element.user.followers_count,
            profilepic: element.user.profile_image_url,
            created: element.user.created_at,
            tweet: element.text
          })
        }
      }


      return dispatch(
        fetchGetTweetsSuccess(tweets)
      )
    })
    .catch((error) => {
      return dispatch(
        fetchGetTweetsError(error)
      )
    })
  }
}


// EXAMPLE Response
let x = [
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




/*------- FETCH SUCCESS / ERROR ACTIONS --------*/

export const FETCH_GET_TWEETS_SUCCESS = 'FETCH_GET_TWEETS_SUCCESS'
export var fetchGetTweetsSuccess = (tweets) => {
  return {
    type: FETCH_GET_TWEETS_SUCCESS,
    tweets: tweets
  }
}

export const FETCH_GET_TWEETS_ERROR = 'FETCH_GET_TWEETS_ERROR'
export var fetchGetTweetsError = (error) => {
  return {
    type: FETCH_GET_TWEETS_SUCCESS,
    error: error
  }
}
