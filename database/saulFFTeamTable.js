import database from "./database.js";

async function createSaulFFTeamTable(){
    const sql = `CREATE TABLE IF NOT EXISTS saulFFTeam (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        position VARCHAR(2) NOT NULL,
        team VARCAR(15) NOT NULL,
        roundDrafted INT NOT NULL,
        positionRanking INT NOT NULL
    );`;
    try{
        const connection = await database.getConnection();
        connection.query(sql);
        console.log(`Create saulFFTeam Table`);
    } catch (error) {
        console.log(`Error Creating saulFFTeam Table`, error);
    }
}

async function saulFFTeamGet(){
    const sql = `SELECT * FROM saulFFTeam`;
    try{
        const connection = await database.getConnection();
        const result = await connection.query(sql);
        connection.release();
        return result[0];
    }catch (error){
        return {code: error.code, message: error.message};
    }
}

async function saulFFTeamPlayerGet(id) {
    const sql = 'SELECT * FROM saulFFTeam WHERE id=?';
    try {
        const connnection = await database.getConnection();
        const result = await connection.query(sql, id);
        connection.release();
        return result;
    } catch (error) {
        return {code: error.code, message: error.message};
    }
}

async function saulFFTeamPost(request){
    const sql = "INSERT INTO saulFFTeam (`name`, `position`, `team`, `roundDrafted`, `positionRanking`) VALUES (?,?,?,?,?);";
    try{
        const connection = await database.getConnection();
        const result = await connection.query(sql, request);
        connection.release;
        return{
            affectedRows: result[0].affectedRows,
            insertId: result[0].insertId,
        };
    } catch (error) {
        return {code: error.code, message: error.message};
    }
}

async function saulFFTeamPut(request, id){
    const sql = "UPDATE saulFFTeam SET name=?, position=?, team=?, roundDrafted=?, positionRanking=?" + id + ";";
    try {
        const connection = await database.getConnection();
        const result = await connection.query(sql, request);
        connection.release();
        return result[0].affectedRows;
    } catch (error) {
        return {code: error.code, message: error.messsage}
    }
}

async function saulFFTeamDelete(id){
    const sql = `DELETE FROM saulFFTeam WHERE id=?;`;
    try {
        const connection = await database.getConnection();
        const result = await connection.query(sql, id);
        connection.release();
        return result[0].affectedRows
    } catch (error){
        return { code: code.error, message: error. message}
    }
}

export default{
    createSaulFFTeamTable,
    saulFFTeamGet,
    saulFFTeamPlayerGet,
    saulFFTeamPost,
    saulFFTeamPut,
    saulFFTeamDelete
};