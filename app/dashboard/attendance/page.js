"use client";

import React, { useState } from "react";
import GradeSelect from "@/app/_components/GradeSelect";
import MonthSelection from "@/app/_components/MonthSelection";
import GlobalApi from "@/app/_services/GlobalApi";
import { Button } from "@/components/ui/button";
import moment from "moment/moment";
import AttendanceGrid from "./_components/AttendanceGrid";

export default function Attendance() {
  const [selectedMonth, setSelectedMonth] = useState();
  const [selectedGrade, setSelectedGrade] = useState();
  const [attendanceList, setAttendanceList] = useState();

  const onSearchHandler = () => {
    // console.log(selectedMonth, selectedGrade);
    const month = moment(selectedMonth).format('MM/YYYY');
    // console.log("Month", month);
    GlobalApi.GetAttendanceList(selectedGrade, month).then(res=>{
      console.log("List:", res.data);

      setAttendanceList(res.data);
    });
  };
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Attendance</h2>

      <div className="flex my-5 gap-5 p-5 border rounded-lg shadow-sm">
        <div className="flex gap-2 items-center">
          {/**Search Option */}
          <label>Select Month</label>
          <MonthSelection selectedMonth={(value) => setSelectedMonth(value)} />
        </div>

        <div className="flex gap-2 items-center">
          <GradeSelect selectedGrade={(v) => setSelectedGrade(v)} />
        </div>

        <Button onClick={() => onSearchHandler()}>Search</Button>
      </div>

      {/**Attendance Grid */}
      <AttendanceGrid
        attendanceList={attendanceList}
        selectedMonth={selectedMonth}
      />
    </div>
  );
}
