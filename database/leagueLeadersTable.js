import database from "./database.js";

async function createleagueLeadersTable () {
    const sql = `CREATE TABLE IF NOT EXISTS leagueLeaders (
        id INT AUTO_INCREMENT PRIMARY KEY,
        year INT NOT NULL,
        name VARCHAR (50) NOT NULL,
        passingYards INT NOT NULL,
        rushingYards INT NOT NULL,
        receivingYards INT NOT NULL,
        touchdowns INT NOT NULL
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );`;
    try {
        const connection = await database.getConnection();
        connection.query(sql);
        console.log(`Created League Leaders Table`);
    }catch (error) {
        console.log(`Error Creating League Leaders Table`, error);
    }
}     

async function leagueLeadersGet(){
    const sql = 
        `SELECT * FROM leagueLeaders ORDER BY year DESC, passingYards DESC, rushingYards DESC, receivingYards DESC;`;
    try{
        const connection = await database.getConnection();
        const result = await connection.query(sql);
        connection.release();
        return result[0]
    } catch (error) {
        return {code: error.code, message: error.message };
    }
}

async function leagueLeaderGet(id){
    const sql = `SELECT * FROM leagueleaders WHERE id=?`;
    try { 
        const connection = await database.getConnection();
        const result = await connection.query(sql, id);
        connection.release();
        return result;
    } catch (error) {
        return { code: error.code, message: error.message};
    }
}

async function leagueLeaderPost(request){
    const sql = 
        "INSERT INTO leagueLeaders (`year`, `name`, `passingYards`, `rushingYards`, `receivingYards`, `touchdowns`) VALUES (?,?,?,?,?,?)"
    try{
        const connection = await database.getConnection();
        const result = await connection.query(sql, request);
        connection.release();
        return {
            affectedRows: result[0].affectedRows,
            insertID: result[0].insertID
        }
    } catch (error) {
        return {code: error.code, message: error.message}
    } 
}

async function leagueLeaderPut(request, id){
    const sql =
        `UPDATE leagueLeaders SET year=?, name=?, passingYards=?, rushingYards=?, receivingYard=? WHERE id=` + id + `;`;
    try{
        const connection = await database.getConnection();
        const result = await connection.query(sql, request);
        connection.release();
        return result[0].affectedRows;
    } catch (error){
        return { code: error.code, message: error.message };
    }
}

async function leagueLeaderDelete(id) {
    const sql = `DELETE FROM leagueLeaders where id=?;`;
    try {
        const connection = await database.getConnection();
        const result = await connection.query(sql, id);
        connection.release();
        return result[0].affectedRows; 
    } catch (error){
        return { code: error.code, message: error.message };
    }
}

export default{
    createleagueLeadersTable,
    leagueLeadersGet,
    leagueLeaderGet,
    leagueLeaderPost,
    leagueLeaderPut,
    leagueLeaderDelete
}


