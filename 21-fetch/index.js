// this function takes a pokemon object and adds it to the list on the page
function addPokemon (pokemon) {
  // find the things you need
  const ul = document.querySelector('#poke-list')

  // create & edit things
  const li = document.createElement('li')
  li.className = 'poke-item'

  // create innerHTML
  li.innerHTML = `
    <h3>${pokemon.name}</h3>
    <img src='${pokemon.image}' />
  `

  // append to the page
  ul.append(li)
}

// This function takes a Response object and returns parsed JSON from it

// We can write it an an arrow function
// const parseJson = resp => resp.json()

//  or a regular function
function parseJson (resp) {
  return resp.json()
}

// this code returns a Promises(Response), then Promise(Array)
fetch('http://localhost:3000/pokemons')
  .then(parseJson)
  .then(pokemons => {
    pokemons.forEach(addPokemon)
  })
