const BASE_URL = 'http://localhost:3030';

const fetchReq = async (url, parameters={}) => {
  return await fetch(`${BASE_URL}/${url}`, parameters)
  .then(response => response.json())
  .catch(err => console.log(err))
}

const getAllEvents = () => fetchReq('all-events');

// const addEvent = (title, date, venue) => fetchReq('events', {
//   method: 'POST',
//   headers: {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//   },
//   body: JSON.stringify({title: title, date: date, venue: venue})
// })

export {
  getAllEvents,
}