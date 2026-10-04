# XianFire Data Modeling Activity

This project contains five MySQL models, five controllers, and 15 API routes.

## Models and collections

| Model | MySQL table | Required fields |
| --- | --- | --- |
| Student | `students` | `studentNumber`, `firstName`, `lastName`, `email`, `program`, `yearLevel` |
| Teacher | `teachers` | `employeeNumber`, `firstName`, `lastName`, `email`, `department`, `specialization` |
| Course | `courses` | `courseCode`, `title`, `description`, `units`, `department`, `semester` |
| Enrollment | `enrollments` | `studentNumber`, `courseCode`, `schoolYear`, `semester`, `status`, `grade` |
| Department | `departments` | `departmentCode`, `name`, `dean`, `building`, `email`, `phone` |

Each model exposes these three database functions:

- `insert(data)`
- `selectAll()`
- `selectById(id)`

## API routes

The server uses `http://127.0.0.1:3000` by default.

| Method | Route | Operation |
| --- | --- | --- |
| POST | `/api/students` | Insert student |
| GET | `/api/students` | Select all students |
| GET | `/api/students/:id` | Select student by MySQL id |
| POST | `/api/teachers` | Insert teacher |
| GET | `/api/teachers` | Select all teachers |
| GET | `/api/teachers/:id` | Select teacher by MySQL id |
| POST | `/api/courses` | Insert course |
| GET | `/api/courses` | Select all courses |
| GET | `/api/courses/:id` | Select course by MySQL id |
| POST | `/api/enrollments` | Insert enrollment |
| GET | `/api/enrollments` | Select all enrollments |
| GET | `/api/enrollments/:id` | Select enrollment by MySQL id |
| POST | `/api/departments` | Insert department |
| GET | `/api/departments` | Select all departments |
| GET | `/api/departments/:id` | Select department by MySQL id |

## Running the project

1. Start Laragon and make sure MySQL is running.
2. Run `npm install`.
3. Run `npm run migrate`.
4. Run `npm start`.

The default Laragon settings are `root` with no password and database `myApp`.
Set these variables to use another MySQL configuration:

```powershell
$env:MYSQL_HOST = "127.0.0.1"
$env:MYSQL_PORT = "3306"
$env:MYSQL_USER = "root"
$env:MYSQL_PASSWORD = ""
$env:MYSQL_DATABASE = "myApp"
npm run migrate
npm start
```

You can copy `.env.example` as a reference for local settings. Do not commit a
real `.env` file or database password.

## API testing

Use Postman or another API client to test the routes. Use `Content-Type: application/json` for POST requests. Example student body:

```json
{
  "studentNumber": "2026-0001",
  "firstName": "Ana",
  "lastName": "Santos",
  "email": "ana.santos@example.com",
  "program": "BS Information Technology",
  "yearLevel": 1
}
```

- Start the API first with `npm run xian`; leave that terminal open.
- Use `http://127.0.0.1:3000`.
- Test `GET http://127.0.0.1:3000/api/students` first. A successful response is an HTTP `200` JSON array.
- A repeated POST with the same unique value returns HTTP `409`; change `studentNumber`, `employeeNumber`, `courseCode`, or `departmentCode`.
- For a GET-by-id request, use a real numeric `id` from the POST response or the GET-all response.

Capture screenshots showing:

1. The POST request with its `201` response.
2. The corresponding GET-all response.
3. The GET-by-id response using the `id` returned by POST.
4. The five MySQL tables in the `myApp` database using Laragon/phpMyAdmin.
5. The route table above or the running API responses.
