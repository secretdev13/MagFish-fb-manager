var mysql = require('mysql')
const config = require('../config')

var connection = mysql.createConnection({
  host: config.dbHost,
  port: config.dbPort,
  user: process.env.DB_Username,
  password: process.env.DB_Password,
  database: process.env.DB_Name,
})

connection.connect(function(err) {
  if (err) throw err
  console.log('Database is connected successfully!')
})

module.exports = connection