'use client'

import React, { useEffect, useState } from 'react'
import AddNewStudent from './_components/AddNewStudent'
import GlobalApi from '@/app/_services/GlobalApi'
import StudentListTable from './_components/StudentListTable'

export default function Students() {
  const [studentList,setStudentList] = useState([])

    useEffect(()=>{
    GetAllStudents();
    })
    
    const GetAllStudents = () =>{
        GlobalApi.GetAllStudents().then(res=>{
           setStudentList(res.data)
        })
    }
  return (
    <div className='p-7'>
    <h2 className='font-bold text-2xl flex justify-between items-center'>
        Students
        <AddNewStudent refreshData={GetAllStudents}/>
    </h2>

    <StudentListTable studentList={studentList} refreshData={GetAllStudents}/>
    </div>
  )
}
