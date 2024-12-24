// import express from "express";
// import cors from "cors";
// import twilio from "twilio";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

// const twilioClient = twilio(accountSid, authToken);

// const otps = new Map();

// function generateOTP() {
//   return Math.floor(100000 + Math.random() * 900000).toString();
// }

// async function sendOTP(phoneNumber, otp) {
//   try {
//     const message = await twilioClient.messages.create({
//       body: `Your OTP for login is: ${otp}`,
//       from: twilioPhoneNumber,
//       to: phoneNumber,
//     });
//     console.log(`Message SID: ${message.sid}`);
//     return { success: true };
//   } catch (error) {
//     console.error("Error sending OTP:", error);
//     return { success: false, error: error.message };
//   }
// }

// app.post("/send-otp", async (req, res) => {
//   const { phoneNumber } = req.body;

//   if (!phoneNumber) {
//     return res
//       .status(400)
//       .json({ success: false, message: "Phone number is required" });
//   }

//   const otp = generateOTP();
//   otps.set(phoneNumber, { otp, createdAt: Date.now() });

//   try {
//     const result = await sendOTP(phoneNumber, otp);
//     if (result.success) {
//       console.log(`OTP sent successfully to ${phoneNumber}`);
//       res.json({ success: true, message: "OTP sent successfully" });
//     } else {
//       console.error(`Failed to send OTP to ${phoneNumber}: ${result.error}`);
//       res.status(500).json({
//         success: false,
//         message: "Failed to send OTP",
//         error: result.error,
//       });
//     }
//   } catch (error) {
//     console.error(`Error sending OTP: ${error.message}`);
//     res.status(500).json({
//       success: false,
//       message: "Error sending OTP",
//       error: error.message,
//     });
//   }
// });

// app.post("/verify-otp", (req, res) => {
//   const { phoneNumber, otp } = req.body;

//   if (!phoneNumber || !otp) {
//     return res
//       .status(400)
//       .json({ success: false, message: "Phone number and OTP are required" });
//   }

//   const storedOTPData = otps.get(phoneNumber);

//   if (!storedOTPData) {
//     return res.json({ success: false, message: "OTP not found or expired" });
//   }

//   const { otp: storedOTP, createdAt } = storedOTPData;
//   const now = Date.now();
//   const otpAge = now - createdAt;

//   if (otpAge > 5 * 60 * 1000) {
//     // OTP expires after 5 minutes
//     otps.delete(phoneNumber);
//     return res.json({ success: false, message: "OTP expired" });
//   }

//   if (storedOTP === otp) {
//     otps.delete(phoneNumber); // Remove the OTP after successful verification
//     console.log(`OTP verified successfully for ${phoneNumber}`);
//     res.json({ success: true, message: "OTP verified successfully" });
//   } else {
//     console.log(`Invalid OTP for ${phoneNumber}`);
//     res.json({ success: false, message: "Invalid OTP" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

// // For demonstration purposes
// console.log("Server started");
// console.log("Make sure to set up your Twilio credentials in the .env file");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

const CORRECT_OTP = "123456";

app.post("/api/verify-otp", (req, res) => {
  const { otp } = req.body;

  if (otp === CORRECT_OTP) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
