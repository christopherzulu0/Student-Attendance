'use client'
import React, { useEffect,useState } from 'react'
import GlobalApi from '../_services/GlobalApi';

export default function GradeSelect({selectedGrade}) {
    const [grades,setGrade] = useState([]);

    useEffect(()=>{
        GetAllGradesList();
       },[]);
 
 
       const GetAllGradesList =()=>{
         GlobalApi.GetAllGrades().then(res=>{
             console.log("TotalGrades:",res.data);
             setGrade(res.data); 
         })
       }
  return (
    <div>
 
        
        <select className='p-32border rounded-lg bg-white' 
          onChange={(e)=>selectedGrade(e.target.value)}
        >
    {grades.map((item, index) => (
      <option  key={index} value={item.grade}>{item.grade}</option>
    ))}
  </select>
      
    </div>
  )
}
