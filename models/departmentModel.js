import { pool } from "../config/database.js";

export const Department = {
  async insert(data) {
    const [result] = await pool.execute(
      "INSERT INTO departments (departmentCode, name, dean, building, email, phone) VALUES (?, ?, ?, ?, ?, ?)",
      [data.departmentCode, data.name, data.dean, data.building, data.email, data.phone]
    );
    return this.selectById(result.insertId);
  },
  async selectAll() {
    const [rows] = await pool.query("SELECT * FROM departments ORDER BY name ASC");
    return rows;
  },
  async selectById(id) {
    const [rows] = await pool.execute("SELECT * FROM departments WHERE id = ?", [id]);
    return rows[0] || null;
  }
};
