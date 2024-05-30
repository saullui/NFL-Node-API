import database from "./database.js";

async function createRookies2024Table(){
    const sql = `CREATE TABLE IF NOT EXISTS rookies2024 (
        id INT AUTO_INCREMENT PRIMARY KEY,
        position VARCHAR(2) NOT NULL,
        name VARCHAR(50) NOT NULL,
        college VARCHAR(50) NOT NULL,
        age INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`;
    try{
        const connection = await database.getConnection();
        connection.query(sql);
        console.log(`Created rookies2024 Table`);
    } catch (error){
        console.log(`Error Creating rookies2024 Table`, error);
    }
}

async function rookies2024Get() {
    const sql = `SELECT * FROM rookies2024`;
    try {
        const connection = await database.getConnection();
        const result = await connection.query(sql);
        connection.release();
        return result[0];
    } catch (error) {
        return { code: error.cde, message: error.message}
    }
}

async function rookie2024Get(id){
    const sql = `SELECT * FROM rookies2024 WHERE id=?`;
    try{
        const connection = await database.getConnection();
        const result = await connection.query(sql, id);
        connection.release();
        return result;
    }catch(error) {
        return { code: error.code, message: error.message};
    }
}

async function rookie2024Post(request){
    const sql = "INSERT INTO rookies2024 (`position`, `name`, `college`, `age`) VALUES (?,?,?,?);"
    try{
        const connection = await database.getConnection();
        const results = await connection.query(sql, request);
        connection.release();
        return {
            affectedRows: results[0].affectedRows,
            insertId: results[0].insertId
        };
    }catch (error){
        return { code: error.code, message: error.message};
    }
}

async function rookie2024Put(requst, id){
    const sql = `UPDATE rookies2024 SET position=?, name=?, college=?, age=? WHERE id=` + id + `;`;
    try {
        const connection = await database.getConnection();
        const result = await connection.query(sql, request);
        connection.release();
        return result[0].affectedRows;
    }catch (error){
        return { code: error.code, message: error.message};
    }
}

async function rookie2024Delete(id) {
    const sql = `DELETE FROM rookies2024 where id=?;`;
    try {
        const connection = await database.getConnection();
        const result = await connection.query(sql, id);
        connection.release();
        return result[0].affectedRows;
    } catch (error) {
        return {code: error.code, message: error.message};
    }
}

export default {
    createRookies2024Table,
    rookie2024Get,
    rookies2024Get,
    rookie2024Post,
    rookie2024Put,
    rookie2024Delete
};