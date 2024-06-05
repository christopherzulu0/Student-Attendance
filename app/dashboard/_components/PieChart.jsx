"use client"

import React, { useEffect, useState } from 'react'
import { getUniqueRecord } from '@/app/_services/service';

import { Pie, ResponsiveContainer } from 'recharts'
import {moment} from 'moment'
export default function PieChart({attendanceList}) {
   const [data, setData] = useState([])

    useEffect(()=>{
        if(attendanceList){
            const totalStudent = getUniqueRecord(attendanceList);
            const today = moment().format('D');
            const PresentPercentage = (attendanceList.length/(totalStudent.length*Number(today))*100);
            setData([
                {
                name:'Total Present',
                value:Number(PresentPercentage.toFixed(1)),
                fill:'#4c8cf8'
                },
                {
                    name:'Total Absent',
                    value:Number(100-PresentPercentage.toFixed(1)),
                    fill:'#1fe6d1'
                    }
        ])
        }
    },[attendanceList]);


  return (
    <div className='border p-5 rounded-lg'>
        <h2 className='font-bold text-lg'>Monthly Attendance</h2>
        <ResponsiveContainer width={'100%'} height={300} >
      <PieChart width={730} height={250}>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} label />
        </PieChart>
        </ResponsiveContainer>
    </div>
  )
}
