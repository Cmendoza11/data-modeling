import { Teacher } from "../models/teacherModel.js";

export const createTeacher = async (req, res, next) => {
  try {
    res.status(201).json(await Teacher.insert(req.body));
  } catch (error) {
    next(error);
  }
};

export const getTeachers = async (req, res, next) => {
  try {
    res.json(await Teacher.selectAll());
  } catch (error) {
    next(error);
  }
};

export const getTeacherById = async (req, res, next) => {
  try {
    const teacher = await Teacher.selectById(req.params.id);
    if (!teacher) return res.status(404).json({ error: "Teacher not found" });
    res.json(teacher);
  } catch (error) {
    next(error);
  }
};
