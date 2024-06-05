const {default:axios} = require ('axios');

const GetAllGrades = () => 
  axios.get('/api/grades')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching grades:', error);
      throw error;
    });

const GetAllStudents = () => 
  axios.get('/api/students')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching students:', error);
      throw error;
    });

// Add similar error handling for other functions...

const CreateNewStudent = (data) => 
  axios.post('/api/students', data)
    .then(response => response.data)
    .catch(error => {
      console.error('Error creating student:', error);
      throw error;
    });

const DeleteStudentRecord = (id) => 
  axios.delete('/api/student?id=' + id)
    .then(response => response.data)
    .catch(error => {
      console.error('Error deleting student record:', error);
      throw error;
    });

const GetAttendanceList = (grade, month) => 
  axios.get('/api/attendance?grade='+grade+ "&month=" + month)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching attendance list:', error);
      throw error;
    });

const MarkAttendance = (data) => 
  axios.post('/api/attendance', data)
    .then(response => response.data)
    .catch(error => {
      console.error('Error marking attendance:', error);
      throw error;
    });

const markAbsent = (studentId, day, date) => 
  axios.delete('/api/attendance?studentId=' + studentId + "&" + day + "&date=" + date)
    .then(response => response.data)
    .catch(error => {
      console.error('Error marking absent:', error);
      throw error;
    });

const TotalPresentCountByDay = (date, grade) => 
  axios.get('/api/dashboard?date=' + date + "&grade=" + grade)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching total present count by day:', error);
      throw error;
    });

export default {
  GetAllGrades,
  GetAllStudents,
  CreateNewStudent,
  DeleteStudentRecord,
  GetAttendanceList,
  MarkAttendance,
  markAbsent,
  TotalPresentCountByDay
};
