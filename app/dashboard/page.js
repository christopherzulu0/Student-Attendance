"use client"
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import MonthSelection from '../_components/MonthSelection';
import GradeSelect from '../_components/GradeSelect';
import GlobalApi from '../_services/GlobalApi';
import StatusList from './_components/StatusList';
import BarChartComponent from './_components/BarChartComponent';
import moment from 'moment';
import PieCharts from './_components/PieCharts';

export default function Dashboard() {
    const {setTheme} = useTheme();
    const [selectedMonth,setSelectedMonth] = useState();
    const [selectedGrade,setSelectedGrade] = useState();
    const [attendanceList,setAttendanceList] = useState();
    const [totalPresentData,setTotalPresentData] = useState([]);
    
    useEffect(()=>{
        // setTheme('system')
        GetTotalPresentCountByDay();
        getStudentAttendance();

       
    
    },[selectedMonth || selectedGrade])



    
    const getStudentAttendance = () => {
      GlobalApi.GetAttendanceList(selectedGrade, moment(selectedMonth).format('MM/YYYY'))
        .then(res => {
          console.log(res.data)
          setAttendanceList(res.data);
        })
        .catch(error => {
          console.error('Error fetching attendance list:', error);
        });
    };
    
    const GetTotalPresentCountByDay =()=>{
      GlobalApi.TotalPresentCountByDay(moment(selectedMonth).format('MM/yyyy'),selectedMonth)
      .then(res=>{
       
       setTotalPresentData(res.data);
      })
    }

  return (
    <div className='p-10'>

   <div className='flex items-center justify-between'>

   <h2 className='font-bold text-2xl'>Dashboard</h2>

<div className='flex items-center'>
    <MonthSelection selectedMonth={setSelectedMonth}/>
    <GradeSelect selectedGrade={(v)=>setSelectedGrade(v)}/>
</div>
   </div>

<StatusList attendanceList={attendanceList}/>

<div className='grid grid-cols-1 md:grid-cols-3 gap-5'>

  <div className='md:col-span-2'>
    <BarChartComponent attendanceList={attendanceList} totalPresentData={totalPresentData}/>
  </div>

<div>
<PieCharts attendanceList={attendanceList}/>
</div>

</div>
    </div>
  )
}
