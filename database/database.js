// Get the client
import mysql from 'mysql2/promise';

// // // Configuring Database Connection
const pool = mysql.createPool({
    host: "127.0.0.1",
    user:  "user",
    database:  "nfl_db",
    password:  "password"
})

export default pool