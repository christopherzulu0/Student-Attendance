 const {default: axios}= require("axios");

 const GetAllGrades = ()=>axios.get('/api/grades');
 const CreateNewStudent =(data)=>axios.post('/api/students',data)
 export default{
    GetAllGrades,
    CreateNewStudent
 }