const express = require('express');

const app = express();
const port = 1245;

app.get('/', (_, res) => {
  const resMsg = 'Hello Holberton School!';
  res.send(resMsg);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
