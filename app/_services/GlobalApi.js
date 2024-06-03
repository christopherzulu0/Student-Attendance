 const {default: axios}= require("axios");

 const GetAllGrades = ()=>axios.get('/api/grades');
 const GetAllStudents = ()=>axios.get('/api/students');
 const CreateNewStudent =(data)=>axios.post('/api/students',data)
 const DeleteStudentRecord = (id) => axios.delete('/api/student?id='+id);
 const GetAttendanceList = (grade,month)=>axios.get('/api/attendance?grade='+grade+"&month="+month)
 const MarkAttendance =(data)=>axios.post('/api/attendance',data);  
 const markAbsent = (studentId,day,date)=>axios.delete('/api/attendance?studentId='+studentId+"&"+day+"&date="+date)
 const TotalPresentCountByDay = (date,grade)=>axios.get('/api/dashboard?date='+date+"&grade="+grade);
 
 export default{
    GetAllGrades,
    GetAllStudents,
    CreateNewStudent,
    DeleteStudentRecord,
    GetAttendanceList,
    MarkAttendance,
    markAbsent,
    TotalPresentCountByDay 
 }