import React from 'react'
import Header from '../Components/admin/Header/Header'
import SideBar from '../Components/admin/SideBar/SideBar'
export default function DashboardLayout({ children }) {

  return (
    <div>
      <main>{children}</main>
    </div>
  )
}
