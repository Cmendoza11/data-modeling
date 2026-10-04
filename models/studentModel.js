import { pool } from "../config/database.js";

export const Student = {
  async insert(data) {
    const [result] = await pool.execute(
      "INSERT INTO students (studentNumber, firstName, lastName, email, program, yearLevel) VALUES (?, ?, ?, ?, ?, ?)",
      [data.studentNumber, data.firstName, data.lastName, data.email, data.program, data.yearLevel]
    );
    return this.selectById(result.insertId);
  },
  async selectAll() {
    const [rows] = await pool.query("SELECT * FROM students ORDER BY lastName ASC");
    return rows;
  },
  async selectById(id) {
    const [rows] = await pool.execute("SELECT * FROM students WHERE id = ?", [id]);
    return rows[0] || null;
  }
};
