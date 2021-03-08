// fetch the items from the JSON file
function loadItems() {
  return fetch('data/data.json')  // fetch returns response if it's fetched successfully
    .then(response => console.log(response));
}

// main
loadItems() // returns Promise if it was successful
  .then(items => {
    // displayItems(items);
    // setEventListeners(items);
  })
  .catch(console.log);