# StaffSync

### Employee Performance Management System

---

## Overview

StaffSync is a web-based Employee Performance Management System designed to streamline employee performance tracking, goal management, feedback collection, and performance evaluations within an organization.

The platform enables managers and HR teams to monitor employee progress, conduct reviews, and make data-driven decisions to improve workforce productivity.

---

## Features

### Employee Management
- Add, update, view, and delete employee records
- Maintain employee profiles and department information
- Role-based access control

### Performance Tracking
- Set individual performance goals
- Track employee achievements and progress
- Monitor Key Performance Indicators (KPIs)

### Performance Reviews
- Conduct periodic performance evaluations
- Manager feedback and rating system
- Historical review records for analysis

### Dashboard & Reports
- Performance analytics dashboard
- Employee performance summaries
- Department-wise performance reports
- Visual representation of employee growth

### Authentication & Authorization
- Secure login and registration
- Role-based access (Admin, Manager, Employee)
- Session management and access control

---

## Technology Stack

| Category | Technologies |
|-----------|-------------|
| Frontend | React.js, HTML5, CSS3, JavaScript |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Authentication | JWT |
| Version Control | Git, GitHub |

---

## System Architecture

```text
Frontend (React.js)
        │
        ▼
REST APIs (Express.js)
        │
        ▼
Backend (Node.js)
        │
        ▼
Database (MongoDB)
```

---

## Modules

### Admin Module
- Manage employees
- Assign managers
- Generate reports
- Monitor organizational performance

### Manager Module
- Set goals for employees
- Conduct performance reviews
- Provide ratings and feedback
- Track team performance

### Employee Module
- View assigned goals
- Update progress
- Access performance history
- Receive manager feedback

---

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/staffsync.git
cd staffsync
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the backend directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 5. Run Backend

```bash
npm start
```

### 6. Run Frontend

```bash
npm start
```

---

## Future Enhancements

- AI-powered performance insights
- Automated appraisal recommendations
- Email notifications
- Attendance integration
- Payroll integration
- Mobile application support

---

## Project Objectives

- Improve employee performance monitoring
- Simplify review and feedback processes
- Increase transparency in evaluations
- Support data-driven HR decisions
- Enhance organizational productivity
