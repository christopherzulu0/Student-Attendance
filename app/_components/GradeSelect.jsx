'use client'
import React, { useEffect,useState } from 'react'
import GlobalApi from '../_services/GlobalApi';

export default function GradeSelect({selectedGrade}) {
    const [grade,setGrade] = useState([]);

    useEffect(()=>{
        GetAllGradesList();
       },[]);
 
 
       const GetAllGradesList =()=>{
         GlobalApi.GetAllGrades().then(res=>{
             console.log(res.data);
             setGrade(res.data); 
         })
       }
  return (
    <div>
       <select className='p-2 border rounded-lg'
       onChange={(e)=>selectedGrade(e.target.value)}
      >
       {grade.map((item,index)=>{
         <option key={index} value={item.grade}>{item.grade}</option>
       })}
        
      </select>
    </div>
  )
}
