'use client'

import React, { useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Button } from '@/components/ui/button'
import { CalendarDays } from 'lucide-react'


import { Calendar } from "@/components/ui/calendar"
import { addMonths } from 'date-fns'
import moment from 'moment/moment'

  
export default function MonthSelection({selectedMonth}) {

     
    const nextMonths = addMonths(new Date(),0)
    const [month,setMonth] = useState(nextMonths);
   
  return (
    <div>
      <Popover>
  <PopoverTrigger asChild>
    <Button variant="outline"
    className="flex gap-2 items-center text-slate-500"
    >
   <CalendarDays className='h-5 w-5'/>
    {moment(month).format('MMMM yyyy')}
    </Button>
  </PopoverTrigger>
  <PopoverContent>
  <Calendar
    mode="single"
    month={month}
    onMonthChange={(value)=>{selectedMonth(value);setMonth(value)}}
    className="flex flex-1 justify-center"
  />
  </PopoverContent>
</Popover> 

    </div>
  )
}
