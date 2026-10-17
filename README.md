
# Student Registration Portal

A responsive, multi-step student registration web application built with ReactJS. This project demonstrates client-side form validation, interactive components, state management, and event handling.

## Overview

The Student Registration Portal guides users through a simple registration process, from entering personal details to selecting a course and confirming the information.

This application was developed as part of **Practical No. 3 — Front-End JavaScript Frameworks: ReactJS**.

## Features

- **Welcome page:** Landing page with a campus image and registration overview.
- **Personal information:** Collects name, email, phone number, date of birth, gender, and qualification.
- **Client-side validation:** Checks required fields, email format, 10-digit phone number, and date of birth.
- **Course selection:** Allows users to choose from available courses and view sample durations and fees.
- **Review page:** Displays the entered information before confirmation.
- **Confirmation receipt:** Generates a registration reference number and displays a summary.
- **Interactive navigation:** Supports moving between registration steps.
- **Responsive design:** Adapts to desktop and mobile screens.
- **Error and success messages:** Provides feedback for invalid inputs and successful confirmation.

## Technology Stack

- ReactJS
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite

## Application Flow

1. **Welcome:** Introduces the registration portal.
2. **Personal Details:** Collects and validates student information.
3. **Course Selection:** Lets the student select a course.
4. **Review and Confirm:** Shows the registration summary and asks for confirmation.
5. **Receipt:** Displays a confirmation message and reference number.

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm.

### Installation

Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/student-registration-portal.git
```

Navigate to the project folder:

```bash
cd student-registration-portal
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173/`.

## Production Build

To check and build the application for production:

```bash
npm run build
```

Vite generates the production files in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## Validation Demonstration

Test the application using these scenarios:

| Test Case | Expected Result |
|---|---|
| Submit empty personal details | Required-field errors appear |
| Enter an invalid email | Email validation error appears |
| Enter a phone number with fewer or more than 10 digits | Phone validation error appears |
| Select a future date of birth | Date validation error appears |
| Continue without selecting a course | Course selection error appears |
| Confirm without accepting the terms | Terms error appears |
| Complete all steps with valid information | Confirmation receipt appears |

## React Concepts Demonstrated

- **Components:** The application interface is built using React components and JSX.
- **State management:** `useState` stores form values, validation errors, navigation state, and confirmation details.
- **Event handling:** `onChange`, `onClick`, and `onSubmit` respond to user interactions.
- **Conditional rendering:** Different screens are displayed according to the current registration step.
- **Client-side validation:** JavaScript checks user input before allowing progression.
- **Dynamic UI:** Course details, progress indicators, errors, and the receipt update according to application state.

## Project Structure

```text
student-registration-portal/
├── public/
│   └── campus.jpg
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Important Notes

- This is an educational demonstration project.
- Registration data is held in the application's client-side state and is not saved to a backend database.
- Course fees are sample values for demonstration only.
- The confirmation receipt is generated in the browser; it does not represent an official enrollment.
- The campus photograph is stored in the `public` directory.

## Deployment

The application can be deployed using platforms such as Vercel or Netlify. Add your live deployment URL here after deployment:

**Live Demo:** `https://student-registration-portal-olive.vercel.app/`

## Author

Student Registration Portal — ReactJS Practical No. 3.
