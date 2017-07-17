const streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
let twitchAPIURL = "https://wind-bow.glitch.me/twitch-api"

let liGenerator = (user, logo, infoStatus, status)=> {
  return $("<li/>", {
              class:"collection-item avatar valign-wrapper " + status,
              html: '<img src="' + logo + '" alt="avatar image" class="circle">' +
                    '<a href="https://www.twitch.tv/' + user + '" id="user" class="title center-align" target="_blank">' + user + '</a>' +
                    '<span id="info" class="description truncate center-align">' + infoStatus + '<span/>'
          })
}

let search = ()=> {
  let query = $('input').val().toLowerCase();
  $('.collection li').each(()=> {
    let name = $(this).find('#user').text().toLowerCase();
    if (name.indexOf(query) === -1) {
      $(this).addClass('filtered')
    }
    else {
      $(this).removeClass('filtered')
    }
  })
}


$(document).ready(()=>{
  let listOfResults = []

  streamers.forEach((streamer)=>{
    let logo
    let infoStatus
    let status
    let usersLink = twitchAPIURL + "/users/" + streamer + "?callback=?"
    let streamLink = twitchAPIURL + "/streams/" + streamer + "?callback=?"

    $.getJSON(usersLink, (data)=>{
      logo = data.logo !== null ? data.logo : "http://placekitten.com/g/50/50"
    })

    $.getJSON(streamLink, (data)=>{
      if (data.stream === null) {
        infoStatus = "<em>Offline</em>"
        status = "offline"
      }
      else {
        status = "online"
      }
      let channelLink = twitchAPIURL + "/channels/" + streamer + "?callback=?"
      $.getJSON(channelLink, (data)=>{
        if(infoStatus !== "<em>Offline</em>") {
          infoStatus = data.status
        }
        $(".collection").append(liGenerator(streamer, logo, infoStatus, status))
      })
    })
  }) // .forEach

  $('ul.tabs').tabs()
  $('input').keyup(search())

})
