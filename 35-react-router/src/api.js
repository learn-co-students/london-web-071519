const baseUrl = 'http://localhost:3001'
const paintingsUrl = baseUrl + '/paintings'
const getPaintingUrl = id => `${paintingsUrl}/${id}`

const jsonify = resp => resp.json()

const get = url => fetch(url).then(jsonify)

const destroy = url =>
  fetch(url, {
    method: 'DELETE'
  }).then(jsonify)

const getPaintings = () => get(paintingsUrl)
const getPainting = id => get(getPaintingUrl(id))
const deletePainting = id => destroy(getPaintingUrl(id))

export default { getPaintings, getPainting, deletePainting }
