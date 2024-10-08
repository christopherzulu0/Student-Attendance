"use client";

import React, { useEffect, useState } from "react";
import GlobalApi from "@/app/_services/GlobalApi";
import { getUniqueRecord } from "@/app/_services/service";
import { AgGridReact } from "ag-grid-react";

import moment from "moment/moment";
import { toast } from "sonner";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css";

const pagination = true;
const paginationPageSize = 500;
const paginationPageSizeSelector = [10, 50, 100];

export default function AttendanceGrid({ attendanceList, selectedMonth }) {
  const [rowData, setRowData] = useState();
  const [colDefs, setColDefs] = useState([
    { field: "studentId", filter: true },
    { field: "name", filter: true },
  ]);

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const numberOfDays = daysInMonth(
    moment(selectedMonth).format("YYYY"),
    moment(selectedMonth).format("MM") - 1 // Subtract 1 to match JavaScript month numbering (0-11)
  );

  const daysArrays = Array.from({ length: numberOfDays }, (_, i) => i + 1);

  const isPresent = (studentId, day) => {
    const result = attendanceList.find(
      (item) => item.day === day && item.studentId === studentId
    );

    return result ? true : false;
  };

  useEffect(() => {
    if (attendanceList) {
      const userList = getUniqueRecord(attendanceList); // Pass attendanceList here
      setRowData(userList);

      console.log("user list:", userList);

      daysArrays.forEach((date) => {
        setColDefs((prevData) => [
          ...prevData,
          {
            field: date.toString(),
            width: 50,
            editable: true,
          },
        ]);

        userList.forEach((obj) => {
          obj[date] = isPresent(obj.studentId, date);
        });
      });
    }
  }, [attendanceList]);

  const onMarkAttendance = (day, studentId, presentStatus) => {
    const date = moment(selectedMonth).format("MM/yyyy");

    if (presentStatus) {
      const data = {
        day: day,
        studentId: studentId,
        present: presentStatus,
        date: date,
      };
      GlobalApi.MarkAttendance(data).then((res) => {
        toast("Student ID:" + studentId + "marked as present");
      });
    } else {
      GlobalApi.markAbsent(studentId, day, date).then((res) => {
        console.log("Absent:", res.data);
        toast("Student ID:" + studentId + "marked as absent");
      });
    }
  };
  return (
    <div>
      <div
        className="ag-theme-quartz" // applying the grid theme
        style={{ height: 500 }} // the grid will fill the size of the parent container
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          onCellValueChanged={(e) =>
            onMarkAttendance(e.colDef.field, e.data.studentId, e.newValue)
          }
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
        />
      </div>
    </div>
  );
}
