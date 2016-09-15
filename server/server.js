'use strict'
// dependencies
let express = require('express');
let app = express();
let call = require('request');

let bodyParser = require('body-parser');
let jsonParser = bodyParser.json();

// set port for local build
let port = 8000;

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
// let term = 'iphone'


// Twitter API endpoint
// let url = 'https://api.twitter.com/1.1/search/tweets.json?q=' + term + '&lang=en&result_type=recent'
    // %20 represents spaces in user search

// **DO NOT CHANGE!!!**
// joe's twitter account token for app authentication
let bearerToken = 'AAAAAAAAAAAAAAAAAAAAALXWwwAAAAAAONLagqR%2F63P75ZEQV1QnwsN4KLA%3DfKpXugdwO4dOdQVm73HdHa79AtKQHHFoSezm0Fn9FTLVUcq5Js'

app.get('/tweets', function(request, response) {
  console.log(request, '<--request', response, '<--response')
  let filteredArray = []
      // npm module 'REQUEST' used for http request
      call({
        url: url,
        method: 'GET',
        json: true,
        headers: {
          "Authorization": "Bearer " + bearerToken
        }
      },
      function(err, response, body) {
        console.log(response, '<==TWITTER API RESPONSE B4 PARSING')

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
        console.log(filteredArray)
        console.log(filteredArray.length, '<- length of array')
        //return filtered array to front end
        return
      });
      
      return filteredArray
});

//server setup
app.listen(process.env.PORT || port);
console.log("Listening on port", port);

exports.app = app;
