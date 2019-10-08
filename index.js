var http = require('http')
var env = process.env

function go () {
    var server = http.createServer(function (req, res) {
        res.end()
    })

    server.on('clientError', function (err, socket) {
        socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
    })

    server.listen(env.PORT || 8000)

    return server
}

if (require.main === module) {
    go()
}

module.exports = go

