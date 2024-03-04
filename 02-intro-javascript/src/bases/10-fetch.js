
const  apiKey = 'dnbQVWQlQWPzMNCVQ6VZrqLDWiJ5qxt3';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then( resp => resp.json()) // resp.json() returns a promise
    .then( ({data}) => { // Destructuring the response
        const {url} = data.images.original; // Destructuring the data object
        const img = document.createElement('img');  // Creating an image element
        img.src = url; // Setting the image source
        document.body.append(img); // Appending the image to the body
    })
    .catch( console.warn ); // Catching any error