 const {default: axios}= require("axios");

 const GetAllGrades = ()=>axios.get('/api/grades');
 const GetAllStudents = ()=>axios.get('/api/students');
 const CreateNewStudent =(data)=>axios.post('/api/students',data)
 const DeleteStudentRecord = (id) => axios.delete('/api/student?id='+id);
 const GetAttendanceList = (grade,month)=>axios.get('/api/attendance?grade='+grade+"&month="+month)
 export default{
    GetAllGrades,
    GetAllStudents,
    CreateNewStudent,
    DeleteStudentRecord,
    GetAttendanceList 
 }