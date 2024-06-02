 const {default: axios}= require("axios");

 const GetAllGrades = ()=>axios.get('/api/grades');
 const GetAllStudents = ()=>axios.get('/api/students');
 const CreateNewStudent =(data)=>axios.post('/api/students',data)
 const DeleteStudentRecord = (id) => axios.delete('/api/student?id='+id);
 
 export default{
    GetAllGrades,
    GetAllStudents,
    CreateNewStudent,
    DeleteStudentRecord
 }