"use client"

import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { getUniqueRecord } from '@/app/_services/service';

import Card from './Card';
import { GraduationCap, TrendingDown, TrendingUp } from 'lucide-react';

export default function StatusList({ attendanceList }) {
  const [totalStudent, setTotalStudent] = useState(0);
  const [totalPercentage, setTotalPercentage] = useState(0);

  useEffect(() => {
    if (attendanceList) {
      const uniqueStudents = getUniqueRecord(attendanceList);

      const totalStudentCount = uniqueStudents.length;
      console.log("Uniques",totalStudentCount)
      setTotalStudent(totalStudentCount);

      const today = moment().format('D');
      const presentPercentage = (attendanceList.length / (totalStudentCount * Number(today))) * 100;
      setTotalPercentage(presentPercentage);
    }
  }, [attendanceList]);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6'>
      <Card icon={<GraduationCap />} title='Total Students' value={totalStudent} />
      <Card 
        icon={<TrendingUp />} 
        title="Total % Present" 
        value={totalPercentage !== undefined ? totalPercentage.toFixed(1) + "%" : "N/A"} 
      />
      <Card 
        icon={<TrendingDown />} 
        title='Total % Absent' 
        value={totalPercentage !== undefined ? (100 - totalPercentage).toFixed(1) + "%" : "N/A"} 
      />
    </div>
  );
}
