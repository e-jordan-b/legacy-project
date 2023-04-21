const BASE_URL = 'http://localhost:3030';
const fetchReq = async (url, parameters={}) => {
  return await fetch(`${BASE_URL}/${url}`, parameters)
  .then(response => {
    return response.json()
  })
  .catch(err => console.log(err))
}

const registerUser = (username, age, password) => fetchReq('register', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify({username: username, age: age, password: password})
});

const loginUser = (username,  password) => fetchReq('login', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify({username: username, password: password})
});

const getUserById = (userId) => fetchReq(`user/${userId}`);

const getAllUsers = () => fetchReq('users');

export {
  registerUser,
  loginUser,
  getUserById,
  getAllUsers
}