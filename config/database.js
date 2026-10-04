import mysql from "mysql2/promise";

export const databaseName = process.env.MYSQL_DATABASE || "myApp";
export const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || "127.0.0.1",
  port: Number(process.env.MYSQL_PORT || 3306),
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
  database: databaseName,
  waitForConnections: true,
  connectionLimit: 10
});

export const connectDatabase = async () => {
  const connection = await pool.getConnection();
  connection.release();
  console.log(`✅ MySQL connected: ${databaseName}`);
};
