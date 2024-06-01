"use client"
import React, { useEffect } from 'react'
import { useTheme } from 'next-themes'


export default function Dashboard() {
    const {setTheme} = useTheme();

    useEffect(()=>{
        setTheme('system')
    },[])

  return (
    <div>
      Dashboard
    </div>
  )
}
