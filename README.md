#rough wireframe
https://wireframe.cc/VEbR2k
(very rough placement and only one result in wireframe. there would be multiple results appearing below search field upon submit button click)

#summary
get a search phrase from user input (word, product, phrase, topic, etc.) then do http request of Twitter API to retrieve up to 200 tweets containing the search term, filtered and sorted by users with the most followers. (and cutting out any tweets from people with less than 500 followers)

idea is that you will find the "top influencers" discussing a given topic or phrase.

for content marketing purposes, you can now tweet to those people in hopes they will retweet you or further discuss your topic/product, etc.

#backstory
originally this was going to be an SEO tool that crowdsourced twitter for tweets containing the search term then the response would be analyzed to see what secondary word appeared most in the retrieved tweets.

ex. search "hockey" and a likely secondary word in tweets containing "hockey" would be "Canada"

idea was that you would quickly find related keywords to target in SEO from relationships found in tweets.

(given algorthm complexity and time constraints, switched to "influencer finder")

#steps left to do
1.) sort the filteredArray (started on line 53) by followers_count (backend or frontend)

2.) parse search term variable from front end so spaces are handled for the URL in http request (front end)

from https://dev.twitter.com/rest/public/search:

'Please, make sure to URL encode these queries before making the request. There are several online tools to help you to do that, or you can search at twitter.com/search and copy the encoded URL from the browser’s address bar. The table below show some example mappings from search queries to URL encoded queries:

Search query:
“happy hour” :)

URL encoded query:
%22happy%20hour%22%20%3A%29

Note that the space character can be represented by “%20” or “+” sign.'

3.) send user input value, after properly parsed, to the back end. perhaps a PUT endpoint? export variable in client.js and then require variable in server.js?
(front end and back end)

4.) React + Redux for actions (front end)

5.) CSS styling (front end)

NOTE: you have full permission to add/remove the properties you get in that response by console logging (body.statuses) in server.js to see what other properties are available.

you also have full permission to alter wireframe and present the results however looks best.

the filtered array response to the front end will look like:  
[
  {
    realname: 'Cade Phillips',
    handle: 'TyCado',
    location: 'Canada',
    followers: 577,
    profilepic: 'http://pbs.twimg.com/profile_images/748619192803287040/44Kuv15A_normal.jpg',
    created: 'Tue Mar 27 20:46:16 +0000 2007',
    tweet: '@bdnwheatkings take down Regina 10-3. Two 20 min periods 3 on 3 hockey. Should set up the game on Friday nicely. Good job boys!!'
  },

  {
    realname: 'Sage of the Six Path',
    handle: 'RyanGawdsling',
    location: 'Brooklyn,NY',
    followers: 1306,
    profilepic: 'http://pbs.twimg.com/profile_images/672842227769569280/GPo54u3j_normal.jpg',
    created: 'Tue Mar 27 20:46:16 +0000 2007',
    tweet: 'RT @NYCMayorsOffice: Fun Fact: Commissioner @NYCCalise played on team USA’s Ice Sled Hockey team in the 1998 #Paralympics 💪 https://t.co/CZ…'
  },
  
  {
    realname: 'Bruins Feed',
    handle: 'BruinsFeed',
    location: '',
    followers: 600,
    profilepic: 'http://pbs.twimg.com/profile_images/527464961983803392/cALK0ndA_normal.jpeg',
    created: 'Tue Mar 27 20:46:16 +0000 2007',
    tweet: 'Combining hockey players and social media can be a dangerous thing: https://t.co/yyIvuLZcCo'
  }
]

#v2.0 steps, for the future or if time permits
- search by place? biggest influencers in a given location?

- offer option (and test result differences) to search recent tweets vs most popular tweets (recent the current default)

- integrate db by dumping results into db and storing the results by search term to be retrieved later through user login/authentication

- integrate Klout API score into infuencer determination (klout api gives you ability to retrieve klout id from twitter id)

- implement/add secondary seo keyword retrieval as described in backstory

- switch to streaming API from static search API in order to show new tweets as reactive results without having to refresh/reload/research
