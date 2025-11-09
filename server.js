const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// לשרת את קבצי ה-build
app.use(express.static(path.join(__dirname, 'dist')));

// לכל בקשה אחרת, להחזיר את index.html
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
