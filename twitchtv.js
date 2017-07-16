//  To get a client ID, request should be
// curl -H Accept: application/vnd.twitchtv.v5+json
// -H Client-ID: uo6dggojyb8d6soh92zknwmi5ej1q2'
// -X GET https://api.twitch.tv/kraken/users?login=dallas,dallasnchains
const response = {
   "_total": 2,
   "users": [
      {
         "_id": "44322889",
         "bio": "Just a gamer playing games and chatting. :)",
         "created_at": "2013-06-03T19:12:02.580593Z",
         "display_name": "dallas",
         "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/dallas-profile_image-1a2c906ee2c35f12-300x300.png",
         "name": "dallas",
         "type": "staff",
         "updated_at": "2017-02-09T16:32:06.784398Z"
      },
      {
         "_id": "129454141",
         "bio": null,
         "created_at": "2016-07-13T14:40:42.398257Z",
         "display_name": "dallasnchains",
         "logo": null,
         "name": "dallasnchains",
         "type": "user",
         "updated_at": "2017-02-04T14:32:38.626459Z"
      }
   ]
}
