const fs = require('fs');

function countStudents(dbPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf8', (fileErr, data) => {
      if (fileErr) {
        reject(Error('Cannot load the database'));
        return;
      }
      const results = [];
      let logMsg;

      const dbContent = data.toString().split('\n');
      const studentRecords = dbContent.filter((item) => item);
      const students = studentRecords.map((item) => item.split(','));

      const totalStudents = students.length ? students.length - 1 : 0;
      logMsg = `Number of students: ${totalStudents}`;
      console.log(logMsg);
      results.push(logMsg);

      const studentsByField = {};
      for (const idx in students) {
        if (idx !== 0) {
          if (!studentsByField[students[idx][3]]) studentsByField[students[idx][3]] = [];
          studentsByField[students[idx][3]].push(students[idx][0]);
        }
      }

      delete studentsByField.field;

      for (const field of Object.keys(studentsByField)) {
        logMsg = `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`;
        console.log(logMsg);
        results.push(logMsg);
      }
      resolve(results);
    });
  });
}

module.exports = countStudents;
