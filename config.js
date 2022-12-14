require('dotenv').config()

const config = {
    db: {
        host: 'localhost',
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        port: 3307,
        database: process.env.MYSQL_DATABASE
    },
    listPerPage: 20
}

module.exports = config