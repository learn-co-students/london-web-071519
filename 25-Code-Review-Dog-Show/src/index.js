const DOG_URL = 'http://localhost:3000/pups'
const dogBarEl = document.getElementById('dog-bar')
const dogInfoEl = document.getElementById('dog-info')
const dogFilterBtn = document.getElementById('good-dog-filter')
let toggle = false
const getDogs = () => {
    return fetch(DOG_URL)
    .then(resp => resp.json())
    .then(dogs => renderAllDogs(dogs))
}

const renderAllDogs = dogs => {
    dogs = filteredDogs(dogs)
    dogBarEl.innerHTML = ''
    dogs.forEach(dog => {
        renderDog(dog)
    });
}

const renderDog = dog => {
    let dogSpan = document.createElement('span')
    dogSpan.innerText = `${dog.name}`
    dogSpan.addEventListener('click', e => renderDogInfo(dog))
    dogBarEl.appendChild(dogSpan)
}

const renderDogInfo = dog => {
    let btn = document.createElement('button')
    btn.innerText = dog.isGoodDog ? 'Bad Dog!' : 'Good Dog!'
    dogInfoEl.innerHTML = `  <img src='${dog.image}'>
    <h2>${dog.name}</h2>`
    btn.addEventListener('click', e => updateDog(dog))
    dogInfoEl.appendChild(btn)
}

const updateDog = dog => {
    return fetch(DOG_URL+'/'+dog.id, {
        method: 'PATCH',
        headers:{'content-type':'application/json'},
        body: JSON.stringify({isGoodDog: !dog.isGoodDog})
    })
    .then(resp => resp.json())
    .then(dog => renderDogInfo(dog))
    .then(() => getDogs())
}

dogFilterBtn.addEventListener('click', e => {
    toggle = !toggle
    dogFilterBtn.innerText = toggle ? 'Filter good dogs: ON':'Filter good dogs: OFF'
    getDogs()
})

const filteredDogs = dogs => {
    return toggle ? dogs.filter(dog => dog.isGoodDog === toggle):dogs
}

getDogs()