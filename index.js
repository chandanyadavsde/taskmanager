const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/env', (req, res) => {
  const environment = process.env.APP_ENV || process.env.NODE_ENV || 'development';
  res.json({ environment });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
