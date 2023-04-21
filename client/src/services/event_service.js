const BASE_URL = 'http://localhost:3030';

const fetchReq = async (url, parameters={}) => {
  return await fetch(`${BASE_URL}/${url}`, parameters)
  .then(response => response.json())
  .catch(err => console.log(err))
}

const getAllEvents = () => fetchReq('all-events');

const addEvent = (newEvent) => fetchReq('add-event', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify(newEvent)
})

export {
  getAllEvents,
  addEvent
}