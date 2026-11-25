import React from 'react'
import Header from '../../Components/admin/Header/Header.jsx'
import SideBar from '../../Components/admin/SideBar/SideBar.jsx'
export default function adminLayout({ children }) {

  return (
    <div className='flex text-black'>
        <SideBar />
      <main className='md:flex-1 mr-12 lg:mr-64 min-w-0 w-full'>
        <Header />
        <section className='p-8'>
        {children}
        </section>
      </main>
    </div>
  )
}
