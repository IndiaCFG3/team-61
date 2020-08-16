require('dotenv').config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

console.log(process.env.SENDGRID_API_KEY);

const otp = Math.floor(100000 + Math.random() * 900000);
const msg = {
  to: "vitsaurav@example.com",
  from: "sauravhiremath@gmail.com", // Use the email address or domain you verified above
  subject: "[PANAH FOUNDATION] ENTER YOUR OTP",
  text: `Thank you for registering with Panah. Your OTP is ${otp}`,
  html: `<strong>Thank you for registering with Panah. Your OTP is ${otp}</strong>`,
};

export const sendOTP = () => {
  //ES6
  console.log("sending otp");
  sgMail.send(msg).then(
    () => {},
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
};
