import React from 'react'
import Navbar from '../component/Navbar'

export default function DashboardLayout({children}) {
  return (
    <>
        <Navbar />
        {children}
    </>
  )
}
