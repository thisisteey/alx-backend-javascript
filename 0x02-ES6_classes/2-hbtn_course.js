class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Gets and sets the name of the course
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Gets and sets the length of the course
  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  // Gets and sets the students taking the course
  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!(newStudents instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!newStudents.every((studentName) => typeof studentName === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}
export default HolbertonCourse;
