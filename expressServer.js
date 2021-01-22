const express = require('express'); 
const app = express(); 

app.get('/', (request, response) => {
const helloWorld = heading('Hello World', 'h1'); 
response.end(helloWorld.repeat(3)); 
}) 

app.get('/details', (request, response) => {
const details = heading('Welcome to the details page', 'h3'); 
response.end(details.repeat(2)); 
})

app.listen(3000); 
console.log('now listening on server https://localhost:3000')

function heading(text, element) {
    return `<${element}>${text}</${element}> `; 
}