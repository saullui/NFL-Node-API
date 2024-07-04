import database from "./database.js";

async function createPlayersTable() {
  const sql = `CREATE TABLE IF NOT EXISTS players (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        height INT NOT NULL,
        weight INT NOT NULL,
        age INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`;
  try {
    const connection = await database.getConnection();
    connection.query(sql);
    console.log("Created Players Table");
  } catch (error) {
    console.log("Error Creating Players Table ", error);
  }
}

async function playersGet() {
  const sql = `SELECT * FROM players`;
  try {
    const connection = await database.getConnection();
    const result = await connection.query(sql);
    connection.release();
    return result[0];
  } catch (error) {
    return { code: error.code, message: error.message };
  }
}

async function playerGet(id) {
  const sql = `SELECT * FROM players WHERE id=?`;
  try {
    const connection = await database.getConnection();
    const result = await connection.query(sql, id);
    connection.release();
    return result;
  } catch (error) {
    return { code: error.code, message: error.message };
  }
}

async function playerPost(request) {
  const sql =
    "INSERT INTO players (`name`, `height`, `weight`, `age`) VALUES (?,?,?,?);";
  try {
    const connection = await database.getConnection();
    const result = await connection.query(sql, request);
    connection.release();
    return {
      affectedRows: result[0].affectedRows,
      insertId: result[0].insertId,
    };
  } catch (error) {
      return { code: error.code, message: error.message };
  }
}

async function playerPut(request, id) {
  const sql =
    `UPDATE players SET name=?, height=?, weight=?, age=? WHERE id=` + id + `;`;
  try {
    const connection = await database.getConnection();
    const result = await connection.query(sql, request);
    connection.release();
    return result[0].affectedRows;
  } catch (error) {
    return { code: error.code, message: error.message };
  }
}

async function playerDelete(id) {
  const sql = `DELETE FROM players WHERE id=?;`;
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
  createPlayersTable,
  playersGet,
  playerGet,
  playerPost,
  playerPut,
  playerDelete,
};
