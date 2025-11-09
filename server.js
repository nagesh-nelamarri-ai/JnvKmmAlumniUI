const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the correct build output
app.use(express.static(path.join(__dirname, 'dist/JnvKmmAlumniUI/browser')));

// Catch-all route using regex
app.get(/^\/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/JnvKmmAlumniUI/browser/index.html'));
});

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Angular app running on port ${port}`);
});
