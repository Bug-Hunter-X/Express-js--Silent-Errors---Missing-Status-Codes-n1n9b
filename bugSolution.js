const express = require('express');
const app = express();
app.get('/', (req, res) => {
  try {
    // Simulate potential error
    //if (someCondition) { throw new Error('Something went wrong'); }
    res.status(200).send('Hello World!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});