fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Do something with the data
  })
  .catch(error => {
    console.error(error);
    // Handle the error
  });