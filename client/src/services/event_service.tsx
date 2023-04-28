import {commonHeaders, fetchReq } from "./services_common_data"
import { EventType } from "../@types/EventType"

const getAllEvents = (userId: string) => fetchReq(`all-events/${userId}`)

const addEvent = (newEvent: EventType) => fetchReq('add-event', {
  method: 'POST',
  headers: {...commonHeaders},
  body: JSON.stringify(newEvent)
})

const addUserToJoinedList = (userId: string, eventId: string) => fetchReq(`add-user-to-joined-list/${eventId}`, {
  method: 'POST',
  headers: {...commonHeaders},
  body: JSON.stringify({userId: userId, eventId: eventId})
})

const removeUserFromJoinedList = (userId: string, eventId: string) => fetchReq(`remove-user-from-joined-list/${eventId}`, {
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