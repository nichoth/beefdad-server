var http = require('http')

function go () {
    var server = http.Server()
    return server
}

module.exports = go
