import {commonHeaders, fetchReq } from "./services_common_data"
import { EventType } from "../@types/EventType"

const getAllEvents = (userId: string) => fetchReq(`events/${userId}`)

const addEvent = (newEvent: EventType) => fetchReq('event', {
  method: 'POST',
  headers: {...commonHeaders},
  body: JSON.stringify(newEvent)
})

const userToJoinedList = (userId: string, eventId: string, type: string) => fetchReq(`eventUser/${eventId}`, {
  method: 'POST',
  headers: {...commonHeaders},
  body: JSON.stringify({userId: userId, eventId: eventId, type: type})
})

export {
  getAllEvents,
  addEvent,
  userToJoinedList
}