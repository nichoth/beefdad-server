var test = require('tape')
var Server = require('../')

test('server', function (t) {
    t.plan(1)
    var server = Server()
    t.ok(server, 'server returns')
    server.close()
})
