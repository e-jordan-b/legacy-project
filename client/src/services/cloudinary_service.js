
const BASE_URL = 'https://api.cloudinary.com/v1_1/dyjtzcm9r/image/upload';

const fetchReq = async (parameters={}) => {
  return await fetch(`${BASE_URL}`, parameters)
  .then(response => response.json())
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
  fetchReq({
  method: 'POST',
  body: image
  })
};

export {
  sendPictureToCloud,
}