import fetch from 'isomorphic-fetch'


/*------------- FETCH ACTIONS ---------------*/

// Retrieve tweets from Twitter API, arranged by users with most followers
export var fetchGetTweets = (userSearch) => {
  console.log("in fetchGetTweets, searching for...", userSearch)
  return (dispatch) => {
    const url = ''
    const request = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
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
