const http = require('http')
const port = process.env.PORT

const server = http.createServer((req, res) => {
    console.log('Server started')
    res.end(`Hello World in the url ${req.url}`)
})

server.listen(port, () => {
    console.log(`Server listening port ${port}`)
})
