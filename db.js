var level = require('level')

function start () {
    var db = level(process.env.DB_NAME || 'db')
    return db
}

if (require.main === module) {
    start()
}

module.exports = start

