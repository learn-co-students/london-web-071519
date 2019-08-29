// get all the DOM elements you need to work with
const pokeForm = document.querySelector('#poke-form')
const pokeList = document.querySelector('#poke-list')

// this function takes a pokemon object and adds it to the list on the page
function addPokemon (pokemon) {
  // create & edit things
  const li = document.createElement('li')
  li.className = 'poke-item'

  // create innerHTML
  li.innerHTML = `
    <h3>${pokemon.name}</h3>
    <button class='delete-btn'>X</button>
    <img src='${pokemon.image}' />
  `

  const deleteBtn = li.querySelector('.delete-btn')
  deleteBtn.addEventListener('click', event => {
    deletePokemon(pokemon.id).then(() => li.remove())
  })

  // append to the page
  pokeList.append(li)
}

// listen to the form and create a new pokemon on submission
function listenToPokeForm () {
  const listener = event => {
    event.preventDefault()

    const pokemon = {
      name: pokeForm.name.value,
      image: pokeForm.image.value
    }

    // optimistic rendering
    // createPokemon(pokemon)
    // addPokemon(pokemon)

    // conditional rendering
    createPokemon(pokemon).then(addPokemon)
  }

  pokeForm.addEventListener('submit', listener)
  // listener(Event)
}

// This function takes a Response object and returns parsed JSON from it

// We can write it an an arrow function
// const parseJson = resp => resp.json()

//  or a regular function
function parseJson (resp) {
  return resp.json()
}

// creates a pokemon on the server
function createPokemon (pokemon) {
  return fetch('http://localhost:3000/pokemons', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pokemon)
  }).then(resp => resp.json())
}

// remove a pokemon from the server
function deletePokemon (pokemonId) {
  return fetch(`http://localhost:3000/pokemons/${pokemonId}`, {
    method: 'DELETE'
  }).then(resp => resp.json())
}

// this code returns a Promises(Response), then Promise(Array)
fetch('http://localhost:3000/pokemons')
  .then(parseJson)
  .then(pokemons => {
    pokemons.forEach(addPokemon)
  })

listenToPokeForm()
