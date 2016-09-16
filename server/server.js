'use strict'
/* --------- Dependencies --------- */
const express = require('express');
const call = require('request');

/* --------- Global Variables --------- */
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

/* ------- **DO NOT CHANGE!!!** ------- */
// joe's twitter account token for app authentication
const bearerToken = 'AAAAAAAAAAAAAAAAAAAAALXWwwAAAAAAONLagqR%2F63P75ZEQV1QnwsN4KLA%3DfKpXugdwO4dOdQVm73HdHa79AtKQHHFoSezm0Fn9FTLVUcq5Js'

// Enable CORS from client-side
app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  response.header("Access-Control-Allow-Credentials", "true");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

/* ------ Serve static frontend files ------ */
app.use(express.static('build'))






// DB connection ('twitter' is local db name)
// let knex = require('knex')({
//   client: 'pg',
//   connection: {
//     database: 'twitter'
//   },
// });

// search term(s) should be imported from client
// export term(s) from 'client.js', and require above

//response.body before parsing:
// { created_at: 'Thu Sep 15 23:29:18 +0000 2016',
//        id: 776563572033880000,
//        id_str: '776563572033880064',
//        text: 'CEO of #NBA China was on BBC World News talking about, well, pro basketball in China. The dude is a verbal oil slick - geez.',
//        truncated: false,
//        entities: [Object],
//        metadata: [Object],
//        source: '<a href="http://twitter.com" rel="nofollow">Twitter Web Client</a>',
//        in_reply_to_status_id: null,
//        in_reply_to_status_id_str: null,
//        in_reply_to_user_id: null,
//        in_reply_to_user_id_str: null,
//        in_reply_to_screen_name: null,
//        user: [Object],
//        geo: null,
//        coordinates: null,
//        place: null,
//        contributors: null,
//        is_quote_status: false,
//        retweet_count: 0,
//        favorite_count: 0,
//        favorited: false,
//        retweeted: false,
//        lang: 'en' }





/* ----------- USER ENDPOINTS ---------- */

// GET TWEETS
app.post('/tweets', jsonParser, function(req, res) {
  console.log(req.body, '<--request')
  let query = req.body.userSearch
  // hardcoded search term for testing
  // let term = "basketball"
  let url = 'https://api.twitter.com/1.1/search/tweets.json?q=' + query + '&lang=en&result_type=recent'
    // %20 represents spaces in user search
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

    let filterTweets = (element, index, array) => {
      if(element.user.followers_count > 500) {
        filteredArray.push({
          realname: element.user.name,
          handle: element.user.screen_name,
          location: element.user.location,
          followers: element.user.followers_count,
          profilepic: element.user.profile_image_url,
          created: element.user.created_at,
          tweet: element.text,
          retweets: element.retweet_count,
          favorites: element.favorite_count
        })
      }
    }
    console.log(body.statuses[0].user, '<--USER')

    //loop through each returned tweet in response and run the filter function above which pushes the tweets meeting criteria into fitleredArray
    body.statuses.forEach(filterTweets)
    console.log(filteredArray, '<==RES AFTER PARSING')
    console.log(filteredArray.length, '<- length of array')
    res.json(filteredArray)
  });

  //return filteredArray
});

let port = process.env.PORT || 8080
app.listen(port, function() {
  console.log("Listening on port", port);
});
exports.app = app;
