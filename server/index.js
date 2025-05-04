const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/check-url', (req, res) => {
  const { url } = req.body;

  const isSuspicious = url.includes("login") || url.includes("secure");
  res.json({ result: isSuspicious ? "Suspicious" : "Safe" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
