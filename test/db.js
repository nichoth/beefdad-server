var test = require('tape')
var Db = require('../db')

test('db', function (t) {
    t.plan(1)
    t.ok(Db(), 'create the database')
})

