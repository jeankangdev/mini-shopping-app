// fetch the items from the JSON file
function loadItems() {
  return fetch('data/data.json')  // fetch returns response if it's fetched successfully
    .then(response => response.json()) // response body -> json obj
    .then(json => json.items);
}

// main
loadItems() // returns Promise if it was successful
  .then(items => {
    console.log(items);
    // displayItems(items);
    // setEventListeners(items);
  })
  .catch(console.log);