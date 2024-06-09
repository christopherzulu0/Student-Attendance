import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { Search, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import GlobalApi from '@/app/_services/GlobalApi';
import { toast } from 'sonner';

const pagination = true;
const paginationPageSize = 500;
const paginationPageSizeSelector = [10, 50, 100];

export default function StudentListTable({ studentList, refreshData }) {
  const [rowData, setRowData] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    if (studentList) {
      setRowData(studentList);
    }
  }, [studentList]);

  const CustomButton = ({ data }) => {
    const handleDelete = () => {
      GlobalApi.DeleteStudentRecord(data.id)
        .then(res => {
          if (res) {
            toast('Record deleted successfully!');
            refreshData();
          }
        })
        .catch(error => {
          console.error('Error deleting record:', error);
        });
    };

    return (
      <AlertDialog>
        <AlertDialogTrigger>
          <Button variant="destructive" size="sm">
            <Trash />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your record and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  };

  const colDefs = [
    { field: 'id', filter: true },
    { field: 'name', filter: true },
    { field: 'address', filter: true },
    { field: 'contact', filter: true },
    // { field: 'Action', cellRenderer: CustomButton },
  ];

  return (
    <div className="my-7">
      <div className="ag-theme-quartz" style={{ height: 500 }}>
        <div className="p-2 rounded-lg border shadow-sm flex gap-2 mb-4 max-w-sm">
          <Search />
          <input
            type="text"
            placeholder="Search on Anything.."
            className="outline-none w-full bg-gray-100"
            value={searchInput}
            onChange={event => setSearchInput(event.target.value)}
          />
        </div>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          quickFilterText={searchInput}
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
          frameworkComponents={{ CustomButton }}
        />
      </div>
    </div>
  );
}
