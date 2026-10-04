import { pool } from "../config/database.js";

export const Teacher = {
  async insert(data) {
    const [result] = await pool.execute(
      "INSERT INTO teachers (employeeNumber, firstName, lastName, email, department, specialization) VALUES (?, ?, ?, ?, ?, ?)",
      [data.employeeNumber, data.firstName, data.lastName, data.email, data.department, data.specialization]
    );
    return this.selectById(result.insertId);
  },
  async selectAll() {
    const [rows] = await pool.query("SELECT * FROM teachers ORDER BY lastName ASC");
    return rows;
  },
  async selectById(id) {
    const [rows] = await pool.execute("SELECT * FROM teachers WHERE id = ?", [id]);
    return rows[0] || null;
  }
};
