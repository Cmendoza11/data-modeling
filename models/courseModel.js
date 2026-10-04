import { pool } from "../config/database.js";

export const Course = {
  async insert(data) {
    const [result] = await pool.execute(
      "INSERT INTO courses (courseCode, title, description, units, department, semester) VALUES (?, ?, ?, ?, ?, ?)",
      [data.courseCode, data.title, data.description, data.units, data.department, data.semester]
    );
    return this.selectById(result.insertId);
  },
  async selectAll() {
    const [rows] = await pool.query("SELECT * FROM courses ORDER BY courseCode ASC");
    return rows;
  },
  async selectById(id) {
    const [rows] = await pool.execute("SELECT * FROM courses WHERE id = ?", [id]);
    return rows[0] || null;
  }
};
