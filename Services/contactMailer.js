const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendMessage = async (name, senderEmail, message) => {
  const messageBody = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Application for sponsorship</title>
    <style>
        @media screen and (max-width: 600px) {
            .content {
                width: 100% !important;
                display: block !important;
                padding: 10px !important;
            }

            .header,
            .body,
            .footer {
                padding: 20px !important;
            }
        }
    </style>
</head>

<body style="font-family: 'Poppins', Arial, sans-serif">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
            <td align="center" style="padding: 20px;">
                <table class="content" width="600" border="0" cellspacing="0" cellpadding="0"
                    style="border-collapse: collapse; border: 1px solid #cccccc;">
                    <!-- Header -->
                    <tr>
                        <td class="header"
                            style="background-color: #30343F; padding: 40px; text-align: center; color: white; font-size: 24px;">
                            Application for sponsorship
                        </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                        <td class="body" style="padding: 40px; text-align: left; font-size: 16px; line-height: 1.6;">
                            Dear ${name},
                            <br><br>
                            ${message}
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td class="footer"
                            style="background-color: #30343F; padding: 40px; text-align: center; color: white; font-size: 14px;">
                            Copyright &copy; 2024 | Malff
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>
  `;
  const mailOptions = {
    from: `${senderEmail} <noreplay@example.com>`,
    to: process.env.Owner_Email,
    subject: "New Message",
    html: messageBody,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Email sending error:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

module.exports = sendMessage;
