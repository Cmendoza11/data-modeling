import { Enrollment } from "../models/enrollmentModel.js";

export const createEnrollment = async (req, res, next) => {
  try {
    res.status(201).json(await Enrollment.insert(req.body));
  } catch (error) {
    next(error);
  }
};

export const getEnrollments = async (req, res, next) => {
  try {
    res.json(await Enrollment.selectAll());
  } catch (error) {
    next(error);
  }
};

export const getEnrollmentById = async (req, res, next) => {
  try {
    const enrollment = await Enrollment.selectById(req.params.id);
    if (!enrollment) return res.status(404).json({ error: "Enrollment not found" });
    res.json(enrollment);
  } catch (error) {
    next(error);
  }
};
