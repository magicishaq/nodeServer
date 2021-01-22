const { response, request } = require('express');
const express = require('express');
const path = require('path'); 

const quotes = [
    'If Java had true garbage collection, most programs would delete themselves upon execution.',
    'QA Engineer walks into a bar. Orders a beer. Orders 0 beers. Orders 999999999 beers. Orders a lizard. Orders -1 beers. Orders a sfdeljknesv.',
    'You should name a variable using the same care with which you name a first-born child.',
    `Documentation is like sex; when it's good, it's very, very good, and when it's bad, it's better than nothing.`,
    'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
    'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.',
    'Measuring programming progress by lines of code is like measuring aircraft building progress by weight.',
    'Computers are like bikinis. They save people a lot of guesswork.',
    'A computer is like a mischievous genie. It will give you exactly what you ask for, but not always what you want.',
    'Features, quality, time: pick two.',

]

function getRandomQuote () { 
    const random = Math.floor(Math.random() * quotes.length); 
    return quotes[random]; 
}

const app = express(); 

app.get('/',  (request, response) => {
     response.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/details', (request, response) => {
    response.json({
        details: getRandomQuote()
    }).end(); 
})
app.use('/public', express.static('./public'))
app.listen(5000); 
console.log('now listening on port 5000 : https://localhost://5000');