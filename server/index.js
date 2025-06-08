const express = require('express');
const cors = require('cors');
const router = require('./routes/routes');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
