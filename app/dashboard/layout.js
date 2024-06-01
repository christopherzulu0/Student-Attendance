
import React from 'react'
import SideNav from './_components/SideNav'
import Header from './_components/Header'
import { Toaster } from '@/components/ui/sonner'

export default function ayout({children}) {
  return (
   <>
    <div className='md:w-64 fixed hidden md:block'>
        <SideNav/>
    </div>
    <div className='md:ml-64'>
      <Header/>
      <Toaster />
      {children}
    </div>
   </>
  )
}
