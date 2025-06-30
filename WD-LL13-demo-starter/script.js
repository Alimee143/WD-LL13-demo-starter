// We'll use fetch() to get a cat fact from the API
// and display it inside the #cat-fact element


fetch('https://catfact.ninja/fact')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const catFactEl = document.getElementById('cat-fact');
    catFactEl.textContent = data.fact;

    //Add styling class
    catFactEl.classList.add('pretty-fact')

  })
  .catch(error => {
    console.error('Somthing went wrong.', error);
    document.getElementById('cat-fact').textContent = "Failed to load the cat fact!"
  })

// Once that works, we can apply the "pretty-fact" CSS class too
