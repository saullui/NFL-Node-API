import database from "./database.js";

//  code: 'ER_PARSE_ERROR',
//errno: 1064,
async function createStadiumsTable() {
  const sql = `CREATE TABLE IF NOT EXISTS stadiums (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        state VARCHAR(2) NOT NULL,
        city VARCHAR(50) NOT NULL,
        year_Built INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`;
  try {
    const connection = await database.getConnection();
    connection.query(sql);
    console.log("Created Stadiums Table");
  } catch (error) {
    console.log("Error Creating Staudium Table ", error);
  }
}

async function stadiumsGet() {
  const sql = `SELECT * FROM stadiums`;
  try {
    const connection = await database.getConnection();
    const result = await connection.query(sql);
    connection.release;
    return result[0];
  } catch (error) {
    return { code: error.code, message: error.message };
  }
}

async function stadiumGet(id) {
  const sql = `SELECT * FROM stadiums WHERE id=?`;
  try {
    const connection = await database.getConnection();
    const result = await connection.query(sql, id);
    connection.release();
    return result;
  } catch (error) {
    return { code: error.code, message: error.message };
  }
}

async function stadiumPost(request) {
  const sql =
    "INSERT INTO stadiums (`name`, `state`, `city`, `year_Built`) VALUES (?,?,?,?);";
  try {
    const connection = await database.getConnection();
    const result = await connection.query(sql, request);
    connection.release();
    return { affectRows: result[0].affectedRows, insertId: result[0].insertId };
  } catch (error) {
    return { code: error.code, message: error.message };
  }
}

async function stadiumPut(request, id) {
  const sqp =
    `UPDATE stadiums SET name=?, state=?, city=?, year_Built=?) WHERE id=` + id + `;`;
  try {
    const connection = await database.getConnection();
    const result = await connection.query(sql, request);
    connection.release();
    return result[0].affectedRows;
  } catch (error) {
    return { code: error.code, message: error.message };
  }
}

async function stadiumDelete(id) {
    const sql = `DELETE FROM stadiums WHERE id=?;`;
    try {
        const connection = await database.getConnection();
        const result = await connection.query(sql, id);
        connection.release();
        return result[0].affectedRows;
    } catch (error) {
        return { code: error.code, message: error.message };
    }
}

export default {
    createStadiumsTable,
    stadiumGet,
    stadiumsGet,
    stadiumPost,
    stadiumDelete,
};
