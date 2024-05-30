import database from './database.js'

async function createTeamsTable(){
const sql = `CREATE TABLE IF NOT EXISTS teams (
    id INT AUTO_INCREMENT PRIMARY KEY,
    city VARCHAR(50) NOT NULL,
    team_name VARCHAR(15) NOT NULL,
    stadium_name VARCHAR(40),
    age INT,
    est_year INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`
try{
    const connection = await database.getConnection()
    connection.query(sql)
    console.log(`Created Teams table`);
} catch(error){
    console.log(`Error creating teams table`, error);
}
}

async function teamGet(id){
const sql = `SELECT * FROM teams WHERE id=?`
try{
    const connection = await database.getConnection()
    const result = await connection.query(sql, id)
    connection.release()
    return result
}catch(error){
    return { code: error.code, message: error.message}
}
}

async function teamsGet(){
const sql = `Select * FROM teams;`
try{
    const connection = await database.getConnection()
    const result = await connection.query(sql)
    connection.release();
    return result[0]
} catch (error){
    return { code: error.code, message: error.message }
}
}

async function teamPost(request){
const sql = "INSERT INTO teams (`city`, `team_name`, `stadium_name`, `age`, `est_year`) VALUES(?,?,?,?,?);"
try{
    const connection = await database.getConnection();
    const result = await connection.query(sql, request);
    connection.release();
    return{ affectedRows: result[0].affectedRows, insertId: result[0].insertId }
} catch(error){
    return { code: error.code, message: error.message }
}
}



// ******************
async function teamPut(request, id){
const sql = `UPDATE teams SET city=?, team_name=?, stadium_name=?, age=?, est_year=? WHERE id=` + id + `;`;
try{
    const connection = await database.getConnection();
    const result = await connection.query(sql, request);
    connection.release();
    return result[0].affectedRows
}catch(error){
    return { code: error.code, message: error.message }
}
}

//********** */
async function teamDelete(id){
    const sql = `DELETE FROM teams WHERE id=?;`;
    try{
        const connection = await database.getConnection();
        const result = await connection.query(sql, id);
        connection.release();
        return result[0].affectedRows;
    }catch(error){
        return { code: error.code, message: error.message };
    }
}

export default {
createTeamsTable,
teamsGet,
teamGet,
teamPost,
teamPut,
teamDelete
}