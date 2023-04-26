export function sortEvents (data) {
  data.sort(function(a,b){
    return new Date(a.date) - new Date(b.date) ;
  });
}

export function parseDate (date) {
  let parsedDate = new Date( Date.parse(date))
  return parsedDate;
}
function getLikedEvents(activeUser, eventId){
  if(activeUser.savedEvents.length >0) {
    if(activeUser.savedEvents.find(savedEvent => savedEvent === eventId)){
      return true;
    }else{
      return false
    }
  }
}

function getJoinedEvents(activeUser, eventId){
  if(activeUser.joinedEvents.length > 0) {
    if(activeUser.joinedEvents.find(joinedEvent => joinedEvent === eventId)){
      return true;
    }else{
      return false
    }
  }else{
     return false
  }
}

export function formatEvents (activeUser, data) {
  data.forEach(el => {
    el.liked = getLikedEvents(activeUser, el._id)
    el.joining = getJoinedEvents(activeUser, el._id)
    el.date = parseDate(el.date)
  });
  let now = new Date();
  let filteredFutureEvents = data.filter(el => el.date > now)
  sortEvents(filteredFutureEvents);
  return filteredFutureEvents;
}