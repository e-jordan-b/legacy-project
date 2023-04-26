import {commonHeaders, fetchReq } from "./services_common_data"

const getAllEvents = (userId) => fetchReq(`all-events/${userId}`)

const addEvent = (newEvent) => fetchReq('add-event', {
  method: 'POST',
  headers: {...commonHeaders},
  body: JSON.stringify(newEvent)
})

const addUserToJoinedList = (userId, eventId) => fetchReq(`add-user-to-joined-list/${eventId}`, {
  method: 'POST',
  headers: {...commonHeaders},
  body: JSON.stringify({userId: userId, eventId: eventId})
})

const removeUserFromJoinedList = (userId, eventId) => fetchReq(`remove-user-from-joined-list/${eventId}`, {
  method: 'POST',
  headers: {...commonHeaders},
  body: JSON.stringify({userId: userId, eventId: eventId})
})

export {
  getAllEvents,
  addEvent,
  addUserToJoinedList,
  removeUserFromJoinedList
}