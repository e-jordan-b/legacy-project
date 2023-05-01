const BASE_URL = 'http://localhost:3002';

export const commonHeaders: {[key: string]: string} = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
}

export const fetchReq = async (url: string, parameters: {}={}) => {
  return await fetch(`${BASE_URL}/${url}`, parameters)
  .then(response => response.json())
  .catch(err => console.log(err))
}
