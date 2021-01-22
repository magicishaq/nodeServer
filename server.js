const http = require('http'); 
const server = http.createServer((request, response) => {
console.log(`User has visited ${request.url}`)
response.end('<h1> hello world </h1> '); 
})
console.log(`listening of https://localhost:3000`)

server.listen(3000)
