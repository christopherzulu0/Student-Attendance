"use client"
import { getUniqueRecord } from '@/app/_services/service';
import React, { useEffect, useState } from 'react'
import Card from './Card';
import { GraduationCap, TrendingDown, TrendingUp } from 'lucide-react';

export default function StatusList({attendanceList}) {
    const [totalStudent,setTotalStudent] =useState();
    const [totalPrecentage, setTotalPercentage] = useState();

    useEffect(()=>{
        if(attendanceList){
            const totalStudent = getUniqueRecord(attendanceList);
            setTotalStudent(totalStudent);

            const today = moment().format('D');
            const PresentPercentage = (attendanceList.length/(totalStudent.length*Number(today))*100);
            setTotalPercentage(PresentPercentage.length)
        }
    },[attendanceList]);

  return (
    <div className='grid grid-cols-1 md: grid-flow-cols-2 lg:grid-cols-3 gap-5 my-6 '>
        <Card icon={<GraduationCap/>} title='Total Student' value={totalStudent}/>
        <Card 
  icon={<TrendingUp/>} 
  title="Total % Present" 
  value={totalPrecentage !== undefined ? totalPrecentage.toFixed(1) + "%" : "N/A"} 
/>
        <Card icon={<TrendingDown/>} title='Total % Absent' value={(100-totalPrecentage).toFixed(1)+"%"}/>

    </div>
  )
}
