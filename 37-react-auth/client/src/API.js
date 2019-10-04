const baseUrl = 'http://localhost:3001'
const signinUrl = baseUrl + '/signin'
const validateUrl = baseUrl + '/validate'
const inventoryUrl = baseUrl + '/inventory'

const get = url =>
  fetch(url, {
    headers: {
      Authorization: localStorage.getItem('token'),
      credentials: 'include'
    }
  }).then(resp => resp.json())

const post = (url, data) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
      credentials: 'include'
    },
    body: JSON.stringify(data)
  }).then(resp => resp.json())

const signIn = user => post(signinUrl, user)

const validate = () => get(validateUrl)

const getInventory = () => get(inventoryUrl)

export default { signIn, validate, getInventory }
