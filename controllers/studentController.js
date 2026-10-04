import { Student } from "../models/studentModel.js";

export const createStudent = async (req, res, next) => {
  try {
    res.status(201).json(await Student.insert(req.body));
  } catch (error) {
    next(error);
  }
};

export const getStudents = async (req, res, next) => {
  try {
    res.json(await Student.selectAll());
  } catch (error) {
    next(error);
  }
};

export const getStudentById = async (req, res, next) => {
  try {
    const student = await Student.selectById(req.params.id);
    if (!student) return res.status(404).json({ error: "Student not found" });
    res.json(student);
  } catch (error) {
    next(error);
  }
};
