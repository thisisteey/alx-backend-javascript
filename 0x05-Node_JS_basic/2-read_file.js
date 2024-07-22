const fs = require('fs');

function countStudents(dbPath) {
  let dbContent;
  try {
    dbContent = fs.readFileSync(dbPath);
  } catch (fileErr) {
    throw new Error('Cannot load the database');
  }

  const lines = dbContent.toString().split('\n');
  const studentRecords = lines.filter((item) => item);
  const students = studentRecords.map((item) => item.split(','));
  const totalStudents = students.length ? students.length - 1 : 0;
  console.log(`Number of students: ${totalStudents}`);

  const studentsByField = {};
  for (const idx in students) {
    if (idx !== 0) {
      if (!studentsByField[students[idx][3]]) studentsByField[students[idx][3]] = [];
      studentsByField[students[idx][3]].push(students[idx][0]);
    }
  }

  delete studentsByField.field;

  for (const field of Object.keys(studentsByField)) {
    console.log(
      `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`,
    );
  }
}

module.exports = countStudents;
