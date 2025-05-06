const http = require('http')
const port = process.env.PORT

const server = http.createServer(console.log('Server started'))

server.listen(port, () => {
    console.log(`Server listening port ${port}`)
})
