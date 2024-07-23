const fs = require('fs');

function readDatabase(dbPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf8', (fileErr, data) => {
      if (fileErr) {
        reject(Error(fileErr));
        return;
      }
      const dbContent = data.toString().split('\n');
      const studentRecords = dbContent.filter((item) => item);
      const students = studentRecords.map((item) => item.split(','));

      const studentsByField = {};
      for (const idx in students) {
        if (idx !== 0) {
          if (!studentsByField[students[idx][3]]) studentsByField[students[idx][3]] = [];
          studentsByField[students[idx][3]].push(students[idx][0]);
        }
      }

      delete studentsByField.field;
      resolve(studentsByField);
    });
  });
}

export default readDatabase;
module.exports = readDatabase;
