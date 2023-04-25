const BASE_URL = 'http://localhost:3030';

const fetchReq = async (url, parameters={}) => {
  return await fetch(`${BASE_URL}/${url}`, parameters)
  .then(response => response.json())
  .catch(err => console.log(err))
}

const getAllEvents = (userId) => fetchReq(`all-events/${userId}`)

const addEvent = (newEvent) => fetchReq('add-event', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify(newEvent)
})

const addUserToJoinedList = (userId, eventId) => fetchReq(`add-user-to-joined-list/${eventId}`, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify({userId: userId, eventId: eventId})
})

const removeUserFromJoinedList = (userId, eventId) => fetchReq(`remove-user-from-joined-list/${eventId}`, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify({userId: userId, eventId: eventId})
})




export {
  getAllEvents,
  addEvent,
  addUserToJoinedList,
  removeUserFromJoinedList
}