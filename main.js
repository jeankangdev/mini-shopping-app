// fetch the items from the JSON file
function loadItems() {
  return fetch('data/data.json')  // fetch returns response if it's fetched successfully
    .then(response => response.json()) // response body -> json obj
    .then(json => json.items);
}

function displayItems(items) {
  const container = document.querySelector('.products');
  container.innerHTML = items.map(item => createHTMLString(item)).join('');
  console.log(container.innerHTML); // item, item
}

function createHTMLString(item) {
  return `
  <div class="product">
    <img src="${item.image}" alt="${item.type}">
    <span class="product__description">${item.gender}, ${item.size}</span>
  </div>
  `;
}

// main
loadItems() // returns Promise if it was successful
  .then(items => {
    displayItems(items);
    // setEventListeners(items);
  })
  .catch(console.log);