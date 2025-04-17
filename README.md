Technical Challenge for Fullstack Developer Applicants
Release License Status

Objectives
This challenge aims to assess your skills as a Fullstack developer, specifically in Java, Spring Boot, Node.js, React, and software development principles.

Requirements
This challenge consists of developing a simple user interface using a Java user interface with Spring Boot as the backend, and a React front-end that allows CRUD to be performed through a simple interface.

Technical Requirements
Backend
Java 17: You must use Java 17 for backend development.
Spring Boot 3.4.x: Create a RESTful API using Spring Boot 3.4.2 or the latest version available.
OpenAPI & API Design: You must expose the API following best practices in defining routes and structure, preferably using OpenAPI for design and documentation.
Maven: You must use Apache Maven to build the artifact.
User CRUD: The API must be able to perform the following CRUD operations on users:
Create: Register a new user.
Read: Get a list of users or search by ID.
Update: Modify an existing user's information.
Delete: Delete a user.
User Model: Users must have the following attributes:
firstName: String
lastName: String
id: Long
id: String
birthDate: Date
email: String
password: String
Persistence: You must use H2 as an in-memory database to store users and use JPA through Spring Data.
Layer Separation: Must maintain consistent layer separation and package distribution.
React Frontend: You must create a user interface to manage users using React 17 or higher.
JavaScript and TypeScript: You must use JavaScript and TypeScript.
Layer Separation: The code must follow a separation of responsibilities design between components, services, and state management.
API Consumption: The front-end must interact with the back-end API to perform CRUD operations (create, edit, delete, list).
User Maintainer: The interface must allow the following actions to be performed on users:
Create a new user.
Edit an existing user.
Delete a user.
List all users.
Deliverables
Git Repository: Submit your challenge as a Pull Request to this repository, indicating your name, email address, and the position you are applying for. All PRs will be rejected; this is not an indicator of testing.
Execution Instructions: Include an INSTRUCTIONS.md file with the necessary instructions to run both the backend and frontend, or containers such as Docker/Docker Compose, if used. Please note that IDEs are not used for reviewing challenges, so the instructions should be tailored to a pre-production environment (terminal/console).
OpenAPI Documentation: In the repository, you must include an openapi.yaml file with the user API design.
