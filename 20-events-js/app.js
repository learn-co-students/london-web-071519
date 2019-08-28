// select the dom nodes
const form = document.querySelector("form");
const bookList = document.querySelector("#book-list");

// add event listeners
form.addEventListener("submit", handleFormSubmit);

// handle dom manipulation
function createBookLi(title, imgSrc) {
  const li = document.createElement("li");
  const containerDiv = document.createElement("div");
  const text = document.createElement("p");
  const img = document.createElement("img");

  text.innerText = title;
  img.src = imgSrc;

  containerDiv.append(text, img);
  li.append(containerDiv);
  return li;
}

function addElement(element, target) {
  target.append(element);
}

// handle submit event
function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const textInput = form[0];
  const srcInput = form[1];
  const text = textInput.value;
  const imgSrc = srcInput.value;
  const li = createBookLi(text, imgSrc);
  addElement(li, bookList);
  form.reset();
}
