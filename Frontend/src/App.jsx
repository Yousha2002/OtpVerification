// import React, { useState, useRef, useEffect } from "react";

// const OTP_LENGTH = 6; // Total number of OTP input fields
// const TIMER_DURATION = 30; // Timer duration in seconds

// export default function OTPInput() {
//   // State variables ha ye
//   const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
//   const [timer, setTimer] = useState(TIMER_DURATION);
//   const [showResend, setShowResend] = useState(false);
//   const [verificationMessage, setVerificationMessage] = useState("");
//   const inputRefs = useRef([]);
//   // Effect counter timer ke liyee
//   useEffect(() => {
//     let interval;
//     if (timer > 0) {
//       interval = setInterval(() => {
//         setTimer((prevTimer) => {
//           if (prevTimer === 1) {
//             setShowResend(true); // shows resend button jab timer end hoo gaii ga
//             clearInterval(interval);
//             return 0;
//           }
//           return prevTimer - 1;
//         });
//       }, 1000);
//     }
//     // Cleanup interval when component unmounts
//     return () => clearInterval(interval);
//   }, [timer]);
//   // Effect to focus on the first input field on component mount
//   useEffect(() => {
//     inputRefs.current[0]?.focus();
//   }, []);
//   // Handles changes in input fields
//   const handleChange = (index, value) => {
//     if (isNaN(Number(value))) return; // Restricts input to numeric values only

//     const newOtp = [...otp];
//     newOtp[index] = value.slice(-1);

//     setOtp(newOtp);

//     if (value && index < OTP_LENGTH - 1) {
//       inputRefs.current[index + 1]?.focus();  // Moves focus to the next input field
//     }
//   };
//  // Handles backspace navigation between fields
//   const handleKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     }
//   };
//   // Handles pasting OTP into the input fields
//   const handlePaste = (e) => {
//     e.preventDefault();
//     const pastedData = e.clipboardData
//       .getData("text/plain")
//       .slice(0, OTP_LENGTH);
//     const newOtp = [...otp];

//     for (let i = 0; i < pastedData.length; i++) {
//       if (isNaN(Number(pastedData[i]))) continue;
//       newOtp[i] = pastedData[i];
//     }

//     setOtp(newOtp);
//     // Focuses on the next empty field or the last field
//     const nextEmptyIndex = newOtp.findIndex((digit) => digit === "");
//     inputRefs.current[
//       nextEmptyIndex !== -1 ? nextEmptyIndex : OTP_LENGTH - 1
//     ]?.focus();
//   };
//   // Resets OTP inputs, timer, and other related states
//   const resetOTP = () => {
//     setOtp(Array(OTP_LENGTH).fill(""));
//     setTimer(TIMER_DURATION);
//     setShowResend(false);
//     setVerificationMessage("");
//     inputRefs.current[0]?.focus();
//   };
//   // Sends OTP to the backend for verification
//   const verifyOTP = async () => {
//     try {
//       const response = await fetch("http://localhost:3001/api/verify-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ otp: otp.join("") }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         setVerificationMessage("OTP Verified Successfully");
//       } else {
//         setVerificationMessage("Invalid OTP, Please Try Again");
//       }
//     } catch (error) {
//       console.error("Error verifying OTP:", error);
//       setVerificationMessage("Error verifying OTP. Please try again.");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="p-8 bg-white rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold mb-6 text-center">Enter OTP</h1>
//         {/* OTP Input Fields */}
//         <div className="flex justify-center space-x-2 mb-4">
//           {otp.map((digit, index) => (
//             <input
//               key={index}
//               type="text"
//               maxLength={1}
//               value={digit}
//               onChange={(e) => handleChange(index, e.target.value)}
//               onKeyDown={(e) => handleKeyDown(index, e)}
//               onPaste={handlePaste}
//               ref={(el) => (inputRefs.current[index] = el)}
//               className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           ))}
//         </div>
//         {/* Timer or Resend Button */}
//         <div className="text-center mb-4">
//           {showResend ? (
//             <button
//               onClick={resetOTP}
//               className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//             >
//               Resend OTP
//             </button>
//           ) : (
//             <p>Resend OTP in {timer} seconds</p>
//           )}
//         </div>
//         {/* Submit Button */}
//         <button
//           onClick={verifyOTP}
//           disabled={otp.some((digit) => digit === "")}
//           className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           Submit
//         </button>
//         {/* Verification Message */}
//         {verificationMessage && (
//           <p
//             className={`mt-4 text-center ${
//               verificationMessage.includes("Successfully")
//                 ? "text-green-600"
//                 : "text-red-600"
//             }`}
//           >
//             {verificationMessage}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

import React from "react";
import OtpNumber from "./Components/OtpNumber";

const App = () => {
  return (
    <>
      <OtpNumber />
    </>
  );
};

export default App;
