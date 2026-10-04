import { Department } from "../models/departmentModel.js";

export const createDepartment = async (req, res, next) => {
  try {
    res.status(201).json(await Department.insert(req.body));
  } catch (error) {
    next(error);
  }
};

export const getDepartments = async (req, res, next) => {
  try {
    res.json(await Department.selectAll());
  } catch (error) {
    next(error);
  }
};

export const getDepartmentById = async (req, res, next) => {
  try {
    const department = await Department.selectById(req.params.id);
    if (!department) return res.status(404).json({ error: "Department not found" });
    res.json(department);
  } catch (error) {
    next(error);
  }
};
