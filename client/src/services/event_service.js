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

//FIX IMAGE SENT TO CLUDINARY. GETTING 400 BAD REQUEST
const sendEventPictureToCloud = async (image) => {
  console.log('savePictuee', image)
  return await fetchReq('cloudinary')
  .then(async(cloudUrl) => {
    console.log(cloudUrl)
     await fetch("https://api.cloudinary.com/v1_1/dyjtzcm9r/upload", {
      method: 'POST',
      body: image
    })
    .then(response => response.text())
    .catch(err => console.log(err))
  }).catch(err => console.log(err))
}

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
  sendEventPictureToCloud,
  addUserToJoinedList,
  removeUserFromJoinedList
}