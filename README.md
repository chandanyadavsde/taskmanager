# Task Manager API – Project Requirements

## 1. Goal
Build a RESTful Task Manager API in Node.js that lets authenticated users create, read, update, and delete their tasks. The app should feel production-ready, with clean structure, validation, tests, and documentation.

## 2. Technology Stack
- Runtime: Node.js 18+
- Framework: Express
- Database: SQLite (via etter-sqlite3 or sqlite3) or MongoDB (Mongoose)
- Auth: JSON Web Tokens
- Validation: Joi or Zod
- Logging: morgan for HTTP logs, plus winston/pino for app logs
- Testing: Jest or Mocha + Chai + Supertest
- API Docs: Swagger/OpenAPI (e.g. swagger-jsdoc + swagger-ui-express)
- Tooling: ESLint + Prettier; dotenv for configuration

## 3. Feature Requirements
- **User management**
  - Register with email + password (hash with bcrypt)
  - Login to receive JWT access token
- **Task CRUD**
  - Authenticated users can create, list, get, update, delete tasks
  - Fields: title (required), description, status (pending/in_progress/done), dueDate
  - Users only see their own tasks
- **List enhancements**
  - Pagination (page, limit)
  - Filtering (status, due before date)
  - Sorting (by due date or created date)
- **Validation & errors**
  - Validate request bodies and query params
  - Consistent error responses with codes/messages
- **Security & config**
  - Env-based settings (PORT, DATABASE_URL, JWT_SECRET, …)
  - Rate limiting or brute-force protection on login
  - Secure HTTP headers with helmet
- **Documentation**
  - Swagger/OpenAPI served at /docs
  - README covering setup, commands, and architecture overview

## 4. Non-Functional Requirements
- Structured project layout (controllers/services/repositories)
- Async/await with centralized error handler
- Meaningful logs (request ID correlation optional)
- ESLint + Prettier configured and passing
- Unit tests (business logic) + integration tests (auth + task flows)
- Optional Docker support (Dockerfile + docker-compose)

## 5. Expected Deliverables
- Complete codebase with instructions (README.md)
- .env.example showcasing required env vars
- Swagger spec (inline or JSON) describing API
- Test suite with clear commands (
pm test)
- If you containerize: Dockerfile + compose file

## 6. Completion Checklist
- [ ] Project runs locally: 
pm install, 
pm run dev
- [ ] Database migrations/seed scripts documented
- [ ] Auth routes issue JWTs; protected routes reject invalid tokens
- [ ] Validation errors return 400 with helpful messages
- [ ] Pagination/filtering behaving as expected
- [ ] Swagger UI reachable and accurate
- [ ] Tests cover happy paths + key edge cases; CI command documented
- [ ] Code linted and formatted (CI command documented)
- [ ] (Optional) Docker build + run instructions work

## 7. Final Submission
When you’re done, send:
- Link to repo or zipped project
- Brief notes on architecture decisions + what you found challenging
- Test command output (e.g. screenshot or log)

After submission I’ll review:
- Functionality vs requirements
- Code quality, structure, naming, modularity
- Error handling, validation, security posture
- Test breadth and reliability
- Documentation and readiness for deployment

I’ll then give specific feedback, point out improvements, and suggest industry-standard patterns and style upgrades.
