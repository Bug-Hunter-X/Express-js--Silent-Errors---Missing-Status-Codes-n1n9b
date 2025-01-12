const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Incorrect usage of res.send - missing status code
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});