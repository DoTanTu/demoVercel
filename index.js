const express = require('express');
const app = express();
const port = 3000;

// Định nghĩa một route cơ bản
app.get('/', (req, res) => {
  res.send('Hello, this is the homepage!');
});

// Định nghĩa một route khác
app.get('/about', (req, res) => {
  res.send('About page');
});

// Lắng nghe trên cổng đã chọn
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});