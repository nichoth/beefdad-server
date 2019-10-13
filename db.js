var level = require('level')

function start () {
    var db = level(process.env.DB_NAME || 'db')

    function register ({ name, password }) {
    }

    function login ({ name, password }) {
    }

    function addFile (opts) {
        var { username, magnet, path, filename } = opts
    }

    return { login, register, close: db.close, addFile }
}

if (require.main === module) {
    start()
}

module.exports = start

