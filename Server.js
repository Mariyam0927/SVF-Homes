const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (your frontend HTML, CSS, images)
app.use(express.static(path.join(__dirname, "public")));

// Handle form submission
app.post("/submit-form", (req, res) => {
  const { name, mobile, email, package } = req.body;

  console.log("Form Data Received:");
  console.log("Name:", name);
  console.log("Mobile:", mobile);
  console.log("Email:", email);
  console.log("Package:", package);

  // Redirect to Thank You page
  res.redirect("/thank.html");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
