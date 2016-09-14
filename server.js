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

// Twitter API endpoint
let url = 'https://api.twitter.com/1.1/search/tweets.json?q=' + term + '&lang=en&result_type=recent'

// DO NOT CHANGE!!!
// joe's twitter account token for app authentication
let bearerToken = 'AAAAAAAAAAAAAAAAAAAAALXWwwAAAAAAONLagqR%2F63P75ZEQV1QnwsN4KLA%3DfKpXugdwO4dOdQVm73HdHa79AtKQHHFoSezm0Fn9FTLVUcq5Js'

//server setup
app.listen(process.env.PORT || port);
console.log("Listening on port", port);  

exports.app = app;
