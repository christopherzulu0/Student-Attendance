 "use client"

import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import GlobalApi from '@/app/_services/GlobalApi';
import { toast } from "sonner"
import { LoaderIcon } from 'lucide-react';

  

export default function AddNewStudent({refreshData}) {
    const [open,setOpen] =useState(false);
    const [grade,setGrade] = useState([]);
    const [loading,setLoading]=useState(false)
  
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm();


      useEffect(()=>{
       GetAllGradesList();
      },[]);


      const GetAllGradesList =()=>{
        GlobalApi.GetAllGrades().then(res=>{
            console.log("Gardes",res.data);
            setGrade(res.data); 
        })
      }

      const onSubmit =(data)=>{
       GlobalApi.CreateNewStudent(data).then(res=>{
        setLoading(true);

        if(res.data){
            reset();
            refreshData();
            setOpen(false);
            toast("Student has been added.")

        }
        setLoading(false)
       })
      }

  return (
    <div>
        <Button onClick={()=>setOpen(true)}>+ Add New Student</Button>
        <Dialog open={open}>
 
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add  New Student</DialogTitle>
      <DialogDescription>
       <form onSubmit={handleSubmit(onSubmit)}>
       <div className='py-2'>
      <label>Full Name</label>
      <Input type='text' placeholder='Ex John Banda'
      {...register('name',{required:true})}
      />
      </div>

      <div className='flex flex-col  py-2'>
      <label>Grade</label>
      <select className='p-3 border rounded-lg'
      {...register('grade',{required:true})}
      >
       {grade.map((item,index)=>{
         <option key={index} value={item.grade}>{item.grade}</option>
       })}
        
      </select>
      </div>


      <div className='py-2'>
      <label>Conatact Number</label>
      <Input type='number' placeholder='Ex 0978556655'
      {...register('contact')}
      />
      </div>

      <div className='py-2'>
      <label>Address</label>
      <Input type='text' placeholder='Ex Lusaka Zambia'
      {...register('address')}
      />
      </div>


       <div className='flex gap-3 items-center justify-end mt-5'>
        <Button type="button" onClick={()=>setOpen(false)} variant={'ghost'}>Cancel</Button>
        <Button 
        type="submit"
        disabled={loading}
        >
            {loading ? <LoaderIcon className='animate-spin'/>: 'Save'}
            </Button>
       </div>
       </form>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}
