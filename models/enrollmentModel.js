import { pool } from "../config/database.js";

export const Enrollment = {
  async insert(data) {
    const [result] = await pool.execute(
      "INSERT INTO enrollments (studentNumber, courseCode, schoolYear, semester, status, grade) VALUES (?, ?, ?, ?, ?, ?)",
      [data.studentNumber, data.courseCode, data.schoolYear, data.semester, data.status, data.grade ?? null]
    );
    return this.selectById(result.insertId);
  },
  async selectAll() {
    const [rows] = await pool.query("SELECT * FROM enrollments ORDER BY schoolYear DESC");
    return rows;
  },
  async selectById(id) {
    const [rows] = await pool.execute("SELECT * FROM enrollments WHERE id = ?", [id]);
    return rows[0] || null;
  }
};
