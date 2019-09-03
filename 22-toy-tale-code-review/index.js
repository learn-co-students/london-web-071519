const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
const toysURL = 'http://localhost:3000/toys'
let toyCollection = document.querySelector('#toy-collection')
let addToy = false

// YOUR CODE HERE

const init = () => {
  // setup event listeners
  document
  .querySelector('.add-toy-form')
  .addEventListener('submit', (event) => {
    event.preventDefault()
    addAToy(event.target.name.value, event.target.image.value)
    .then(renderToy)
  })

  addBtn.addEventListener('click', () => {
    // hide & seek with the form
    addToy = !addToy
    if (addToy) {
      toyForm.style.display = 'block'
    } else {
      toyForm.style.display = 'none'
    }
  })

  // application logic
  renderToys()
}

const renderToys = () => {
  toyCollection.innerHTML = ``
  fetch(toysURL)
  .then(resp => resp.json())
  .then(toysArr => toysArr.forEach(renderToy))
}

const addAToy = (name, image, likes=0) => {
  return fetch(toysURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      image,
      likes
    })
  })
  .then(resp => resp.json())
}

const likeAToy = (toy) => {
  return fetch(`${toysURL}/${toy.id}`,{
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      likes: ++toy.likes
    })
  })
  .then(resp => resp.json())
}

const renderToy = (toy) => {
  let currentToyDiv = document.querySelector(`.card#toy-${toy.id}`)
  let toyHeader = null
  let toyImg = null
  let toyParagraph = null
  let toyBtn = null
  if (!currentToyDiv) {
    toyDiv = document.createElement('div')
    toyHeader = document.createElement('h2')
    toyImg = document.createElement('img')
    toyParagraph = document.createElement('p')
    toyBtn = document.createElement('button')
  
    toyDiv.classList.add('card')
    toyDiv.id = `toy-${toy.id}`
    toyImg.classList.add('toy-avatar')
    toyBtn.classList.add('like-btn')
  
    toyBtn.addEventListener('click', () => {
      likeAToy(toy)
      .then(renderToy)
    })
    toyBtn.innerText = 'Like'
    toyDiv.append(toyHeader, toyImg, toyParagraph, toyBtn)

    toyCollection.append(toyDiv)
  } else {
    toyHeader = currentToyDiv.querySelector('h2')
    toyImg = currentToyDiv.querySelector('img')
    toyParagraph = currentToyDiv.querySelector('p')
    toyBtn = currentToyDiv.querySelector('button')
  }

  toyHeader.innerText = toy.name
  toyImg.src = toy.image
  toyParagraph.innerText = toy.likes
}

init()
// OR HERE!
