
  /*
    MIT License
    
    Copyright (c) 2025 Christian I. Cabrera || XianFire Framework
    Mindoro State University - Philippines

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    */
    
import express from "express";
import { homePage } from "../controllers/homeController.js";
import { createStudent, getStudents, getStudentById } from "../controllers/studentController.js";
import { createTeacher, getTeachers, getTeacherById } from "../controllers/teacherController.js";
import { createCourse, getCourses, getCourseById } from "../controllers/courseController.js";
import { createEnrollment, getEnrollments, getEnrollmentById } from "../controllers/enrollmentController.js";
import { createDepartment, getDepartments, getDepartmentById } from "../controllers/departmentController.js";
const router = express.Router();
router.get("/", homePage);
router.post("/api/students", createStudent);
router.get("/api/students", getStudents);
router.get("/api/students/:id", getStudentById);
router.post("/api/teachers", createTeacher);
router.get("/api/teachers", getTeachers);
router.get("/api/teachers/:id", getTeacherById);
router.post("/api/courses", createCourse);
router.get("/api/courses", getCourses);
router.get("/api/courses/:id", getCourseById);
router.post("/api/enrollments", createEnrollment);
router.get("/api/enrollments", getEnrollments);
router.get("/api/enrollments/:id", getEnrollmentById);
router.post("/api/departments", createDepartment);
router.get("/api/departments", getDepartments);
router.get("/api/departments/:id", getDepartmentById);

export default router;
