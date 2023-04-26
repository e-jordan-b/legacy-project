
const BASE_URL = 'http://localhost:3030/upload';

const fetchReq = async (parameters={}) => {
  return await fetch(`${BASE_URL}`, parameters)
  .then(async(response) => await response.json())
  .catch(err => console.log(err))
}

//Example to get cloudinary url from backend
// const sendPictureToCloud = async (image) => {
//   return await fetchReq('cloudinary')
//   .then(async(cloudUrl) => {
//      await fetch(`${cloudUrl}${image.name}`, {
//       method: 'POST',
//       body: image
//     })
//     .then(response => response.text())
//     .catch(err => console.log(err))
//   }).catch(err => console.log(err))
// }

const sendPictureToCloud = (image) => {
  console.log('calling')
  return fetchReq({
  method: 'POST',
  body: image
  })
};

export {
  sendPictureToCloud,
}