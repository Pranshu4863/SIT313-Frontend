// Load the Express library – a framework that simplifies building web applications in Node.js.
const express = require('express');

// Bring in body-parser – allows us to easily read data sent from HTML forms (POST requests).
const bodyParser = require('body-parser');

// Include Node's path module – helps in safely handling file and directory paths.
const path = require('path');

// Require SendGrid's mail module – used to send emails using SendGrid’s API service.
const sgMail = require('@sendgrid/mail');

// Enable dotenv – reads environment variables from a .env file and makes them available in process.env.
require('dotenv').config();

// Create our Express app instance so we can set up routes and middleware.
const app = express();

// Define the port number – uses the PORT from the environment if available, otherwise defaults to 3000.
const PORT = process.env.PORT || 3000;

// Tell SendGrid which API key to use, retrieved securely from our environment variables.
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middleware: Parse URL-encoded form data so we can access it via req.body.
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware: Make all files inside the "public" folder available to the browser (CSS, images, etc.).
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage – sends the index.html file located in the "views" folder when someone visits "/".
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route for handling subscription form submissions (POST request to "/subscribe").
app.post('/subscribe', (req, res) => {
  // Extract the email field from the submitted form data.
  const { email } = req.body;

  // Build the email content and settings for SendGrid to process.
  const msg = {
    to: email, // Recipient’s email address.
    from: process.env.FROM_EMAIL, // Must match a verified sender in SendGrid.
    subject: 'Welcome to Dev@Deakin!', // Subject line for the welcome email.
    html: `<h1>Welcome to Dev@Deakin</h1><p>We’re thrilled to have you here!</p>`, // HTML email body.
  };

  // Attempt to send the email asynchronously via SendGrid.
  sgMail
    .send(msg)
    .then(() => {
      // Email was sent without issues – show a confirmation message.
      res.send(`<h2>Email sent successfully to ${email}</h2><a href="/">Back</a>`);
    })
    .catch((error) => {
      // Something went wrong – log the details for debugging.
      console.error(error);
      // Display an error message to the user.
      res.send(`<h2>Unable to send email. Check server logs.</h2><a href="/">Back</a>`);
    });
});

// Start listening for incoming requests on the specified port.
app.listen(PORT, () => {
  console.log(`Server is live at http://localhost:${PORT}`);
});
