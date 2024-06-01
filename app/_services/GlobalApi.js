 const {default: axios}= require("axios");

 const GetAllGrades = ()=>axios.get('/api/grades');
 const GetAllStudents = ()=>axios.get('/api/students');
 const CreateNewStudent =(data)=>axios.post('/api/students',data)
 
 
 export default{
    GetAllGrades,
    GetAllStudents,
    CreateNewStudent
 }