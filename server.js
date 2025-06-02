const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const PORT = 3000;

// Serve frontend static files
app.use(express.static(path.join(__dirname, 'frontend')));
app.use(cors());

// Proxy frontend chatbot request to Flask
app.get('/get', async (req, res) => {
  const fetch = (await import('node-fetch')).default;
  const msg = req.query.msg;

  try {
    const response = await fetch(`http://localhost:5000/get?msg=${encodeURIComponent(msg)}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ response: 'Error connecting to chatbot backend' });
  }
});

app.listen(PORT, () => {
  console.log(`Frontend running on http://localhost:${PORT}`);
});
