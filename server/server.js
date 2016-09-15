// dependencies
let express = require('express');
let app = express();
let call = require('request');

let bodyParser = require('body-parser');
let jsonParser = bodyParser.json();

// set port for local build
let port = 4000;

// DB connection ('twitter' is local db name)
let knex = require('knex')({
  client: 'pg',
  connection: {
    database: 'twitter'
  },
});

// search term(s) should be imported from client
// export term(s) from 'client.js', and require above
// hardcoded for testing
let term = 'hockey'


// Twitter API endpoint
let url = 'https://api.twitter.com/1.1/search/tweets.json?q=' + term + '&lang=en&result_type=recent'

// **DO NOT CHANGE!!!**
// joe's twitter account token for app authentication
let bearerToken = 'AAAAAAAAAAAAAAAAAAAAALXWwwAAAAAAONLagqR%2F63P75ZEQV1QnwsN4KLA%3DfKpXugdwO4dOdQVm73HdHa79AtKQHHFoSezm0Fn9FTLVUcq5Js'

// npm module 'REQUEST' used for http request
call({
  url: url,
  method: 'GET',
  json: true,
  headers: {
    "Authorization": "Bearer " + bearerToken
  }
},
function(err, resp, body) {
  let filteredArray = []

  let filterTweets = (element, index, array) => {
    if(element.user.followers_count > 500) {
      filteredArray.push({
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

  //loop through each returned tweet in response and run the filter function above which pushes the tweets meeting criteria into fitleredArray
  body.statuses.forEach(filterTweets)

  // sort objects in the filtered array by follower count (**currently not working**)
  // let compare = (a, b) => {
  //  if (a.user.followers_count < b.user.followers_count)
  //         return -1;
  //         if (a.user.followers_count > b.user.followers_count)
  //         return 1;
  //         return 0;
  // }
  // filteredArray.sort(compare(element, element+1));

  //console logs for testing
  console.log(filteredArray)
  console.log(filteredArray.length, '<- length of array')

  //return filtered array to front end
  return filteredArray
});


//server setup
app.listen(process.env.PORT || port);
console.log("Listening on port", port);

exports.app = app;
