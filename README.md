# Employee Management System

A React-based Employee Management System that allows an admin to create and assign tasks to employees, while employees can view their assigned tasks and track their task status.

## Features

### Admin
- Admin login
- Create new tasks
- Assign tasks to specific employees
- View all employee tasks
- View task status
- Logout functionality

### Employee
- Employee login
- Personalized employee dashboard
- View assigned tasks
- View task details
- Task status indicators
- Logout functionality

## Task Status

Each task can have one of the following statuses:

- Active
- Completed
- Failed
- Pending

## Tech Stack

- React.js
- React Router
- JavaScript
- Tailwind CSS
- Context API
- Browser LocalStorage

## Authentication

This project currently uses `localStorage` for authentication and data persistence.

The application stores:

- `employees` — Employee information and their tasks
- `Admin` — Admin login credentials
- `LoggedIn` — Currently logged-in user's session

On page refresh, the application checks the stored login information and restores the user's session.

## How It Works

### Admin Flow

```text
Admin Login
    ↓
Admin Dashboard
    ↓
Create Task
    ↓
Select Employee
    ↓
Task assigned to employee
    ↓
Task saved in LocalStorage
    ↓
View All Tasks
