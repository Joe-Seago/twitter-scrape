## APP
  1. User searches for word or phrase                    : store user input as value
  2. Clicks Search button                                : dispatch fetch action, passing input value
  3. Twitter API returns array of obj sorted by followers: fetchSuccess stores as state
    * Sort arrays by object property before returning
  4. Iterate through the returned array to render components
    * Object.keys? Array.map?
    * Each iteration returns a component containing tweet info as props



## Front End

### Components
  * Main            -->   Renders search field and button along with TweetList component
  * TweetList       -->   Renders the Tweet components as individual <li>'s
  * Tweet           -->   Renders a tweet     


### State
  * tweets          -->   Array of individual tweet objects


### Actions
  * Fetch actions
    * Retrieve tweets (API)

  * Actions
    *
