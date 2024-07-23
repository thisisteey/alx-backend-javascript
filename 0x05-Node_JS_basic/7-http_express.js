const express = require('express');

const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

const database = args[0];
const app = express();
const port = 1245;

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const resMsg = 'This is the list of our students\n';
  try {
    const students = await countStudents(database);
    res.send(`${resMsg}${students.join('\n')}`);
  } catch (err) {
    res.send(`${resMsg}${err.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
