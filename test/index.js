var test = require('tape')
var Server = require('../')

test('example', function (t) {
    t.plan(1)
    var server = Server()
    t.ok(server, 'server returns')
    server.close()
})
