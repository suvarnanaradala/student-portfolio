const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files (index.html)
app.use(express.static('public'));

// Route to get a single student by regNo
app.get('/students/:regNo', (req, res) => {
  const students = require('./students.json');
  const student = students.find(s => s.regNo === req.params.regNo);
  if (student) res.json(student);
  else res.status(404).json({ error: "Student not found" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
