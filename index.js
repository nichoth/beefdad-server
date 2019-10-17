var http = require('http')
var env = process.env
var url = require('url')
var router = require('ruta3')()
var xtend = require('xtend')

function login (opts) {
    var { res } = opts
    if (process.env.NODE_ENV === 'development') {
        return res.end(null, {})
    }
}

router.addRoute('/login', login)

function go () {
    var server = http.createServer(function onRequest (req, res) {
        var path = url.parse(req.url).pathname
        var m = router.match(path)
        m.action(xtend(m, { req, res }))
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
