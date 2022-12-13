const mysql = require('mysql2/promise')
const config = require('../config')

async function query(sql, params) {
    const con = await mysql.createConnection(config.db) // creates connection to database
    const [results, ] = await con.execute(sql, params) // executes given sql query
    return results
}

module.exports = { query }