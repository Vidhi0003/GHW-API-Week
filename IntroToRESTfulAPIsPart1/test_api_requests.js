fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    return response.json();
  } else {
       throw new Error(response.status);
  })
  .then(data => {
    console.log("Title:", data.title);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });
