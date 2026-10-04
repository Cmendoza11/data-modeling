import { Course } from "../models/courseModel.js";

export const createCourse = async (req, res, next) => {
  try {
    res.status(201).json(await Course.insert(req.body));
  } catch (error) {
    next(error);
  }
};

export const getCourses = async (req, res, next) => {
  try {
    res.json(await Course.selectAll());
  } catch (error) {
    next(error);
  }
};

export const getCourseById = async (req, res, next) => {
  try {
    const course = await Course.selectById(req.params.id);
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.json(course);
  } catch (error) {
    next(error);
  }
};
