const fast2sms = require("fast-two-sms");
const {FAST2SMS} = require("../config");

exports.generateOTP = (otp_length) => {
  // Declare a digits variable
  // which stores all digits
  var digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < otp_length; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
};

exports.fast2sms = async ( {message, contactNumber}) => {
  try {
    const body = {
      authorization: FAST2SMS,
      message,
      numbers: [contactNumber],
    }
    const res = await fast2sms.sendMessage(body);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};