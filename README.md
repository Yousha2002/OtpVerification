OTP Verification Project
This project implements an OTP (One-Time Password) verification system with a React frontend and an Express.js backend.

Features
A UI for users to enter a 6-digit OTP.
Timer to automatically disable the "Resend OTP" button until the timer ends.
Focus management between OTP input fields.
Resend OTP functionality after the timer ends.
OTP verification via backend API.
Frontend (React)
The frontend is built using React.js and Tailwind CSS for styling. It allows the user to enter an OTP in a 6-input field format, manage the timer for OTP expiry, and submit the OTP to the backend for validation.

Key Components:
OTP Input Fields: 6 individual input fields where users can enter OTP digits.
Timer: A countdown timer that triggers the display of the "Resend OTP" button once it reaches 0.
Resend OTP Button: The button is initially hidden and appears when the timer ends.
Submit Button: Submits the OTP for verification.
Verification Message: Displays a success or error message based on OTP verification.
Running the Frontend:
Clone the repository.
Install dependencies: npm install
Start the development server: npm start
The frontend will run onhttps://otp-verification-yousha.vercel.app/ by default.
