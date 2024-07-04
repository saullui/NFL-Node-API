import database from "./database.js";

async function createdraft2025ProspectsTable() {
    const sql = `CREATE TABLE IF NOT EXISTS draftProspects2025 (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR (50) NOT NULL,
        college VARCHAR (50) NOT NULL,
        position VARCHAR (2) NOT NULL,
        ranking INT NOT NULL
    );`;
    try{
        const connection = await database.getConnection();
        connection.query(sql);
        console.log(`Created 2025 Draft Prospects Table`);
    } catch (error) {
        console.log("Error Creating 2025 Draft Prospects Table", error);
    }
}

async function draft2025ProspectsGet() {
    const sql = `SELECT * FROM draftProspects2025`;
    try{
        const connection = await database.getConnection();
        const result = await connection.query(sql);
        connection.release();
        return result[0];
    } catch(error) {
        return { code: error.code, message: error.message };
    }
}

async function draft2025Prospectget(id){
    const sql = "INSERT INTO draftProspects2025 (`name`, `college`, `position`, `ranking) VALUES (?,?,?,?);"
    try{
        const connection = await database.getConnection();
        const result = await connection.query(sql, request);
        connection.release();
        return{
            affectedRows: result[0].affectedRows,
            insertID: result[0].insertID,
        }
    } catch (error) {
        return { 
            code: error.code, 
            message: error.message
        }
    }
}

async function draft2025ProspectPost(request){
    const sql = "INSERT INTO draftProspects2025(`name`, `college`, `position`, `ranking`) VALUES (?,?,?,?);"
    try{
        const connection = await database.getConnection();
        const result = await connection.query(sql, request);
        connection.release();
        return{
            affectedRows: result[0].affectedRows,
            insertID: result[0].insertId
        }
    } catch (error){
        return {
            code: error.code,
            message: error.message
        }
    }
}

async function draft2025ProspectPut(request, id){
    const sql = `UPDATE draftProspects2025 SET name=?, college=?, position=?, ranking? WHERE id=` + id + `;`;
    try{
        const connection = await database.getConnection();
        const result = await connection.query(sql, request);
        connection.release;
        return result[0].affectedRows;
    } catch (error){
        return {
            code: error.code,
            message: error.message
        }
    }
}

async function draft2025ProspectDelete(id){
    const sql = `DELETE FROM draftProspects2025 WHERE id=?;`
    try{
        const connection = await database.getConnection()
        const result = await connection.query(sql, id);
        connection. release();
        return result[0].affectedRows;
    } catch (error) {
        return {
            code: error.code,
            message: error.message
        }
    }
}

export default{
    createdraft2025ProspectsTable,
    draft2025ProspectsGet,
    draft2025Prospectget,
    draft2025ProspectPost,
    draft2025ProspectPut,
    draft2025ProspectDelete
}
