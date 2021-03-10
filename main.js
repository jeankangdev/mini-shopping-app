// fetch the items from the JSON file
function loadItems() {
  return fetch('data/data.json')  // fetch returns response if it's fetched successfully
    .then(response => response.json()) // response body -> json obj
    .then(json => json.items);
}

// update the list with the given items
function displayItems(items) {
  const container = document.querySelector('.products');
  container.innerHTML = items.map(item => createHTMLString(item)).join('');
  console.log(container.innerHTML); // item, item
}

// create HTML list item from the given data items
function createHTMLString(item) {
  return `
  <div class="product">
    <img src="${item.image}" alt="${item.type}">
    <span class="product__description">${item.gender}, ${item.size}</span>
  </div>
  `;
}

function setEventListeners(items) {
  const logo = document.querySelector('.logo');
  logo.addEventListener('click', () => {
    displayItems(items);
  });

  const btns = document.querySelector('.btns');
  btns.addEventListener('click', (event) => {
    onButtonClick(event, items);
  });
}

function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if(key == null || value == null) {
    return;
  }
  displayItems(items.filter(item => item[key] === value));
}

// main
loadItems() // returns Promise if it was successful
  .then(items => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);

