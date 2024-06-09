'use client'

// import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { redirect } from "next/navigation";
import React,{useEffect} from "react";

export default function Home() {
  useEffect(()=>{
    redirect('/dashboard')
  },[])
  return (
   <>
   <h1>Twsts</h1>
   </>
  );
}
