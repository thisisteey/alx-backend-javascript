function getStudentIdsSum(studentsList) {
  return studentsList.reduce((prevStdntId, currStdntId) => (prevStdntId + currStdntId.id), 0);
}
export default getStudentIdsSum;
