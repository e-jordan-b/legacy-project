import { UserType } from "../@types/UserType";
import { EventType } from "../@types/EventType";

export function sortEvents (data: EventType[]) {
  data.sort(function(a,b){
    return new Date(a.date).getTime() - new Date(b.date).getTime() ;
  });
}

export function parseDate (date: Date) {
  let dateString = date.toString();
  let parsedDate = new Date( Date.parse(dateString))
  return parsedDate;
}
function getLikedEvents(activeUser: UserType, eventId: string){
  if(activeUser.savedEvents.length >0) {
    if(activeUser.savedEvents.find(savedEvent => savedEvent === eventId)){
      return true;
    }else{
      return false
    }
  } else {
    return false
  }
}

function getJoinedEvents(activeUser: UserType, eventId: string){
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

export function formatEvents (activeUser:UserType, data:EventType[]) {
  data.forEach(el => {
    el.liked =  getLikedEvents(activeUser, el._id)
    el.joining = getJoinedEvents(activeUser, el._id)
    el.date = parseDate(el.date)
  });
  let now = new Date();
  let filteredFutureEvents = data.filter(el => el.date > now)
  sortEvents(filteredFutureEvents);
  return filteredFutureEvents;
}