import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import SidebarNav from './SidebarNav'

const Layout = () => {
  return (
    <>
    <div>
      <Navbar/>
     
  <div class="row">
    <div class="col">
      <SidebarNav/>
    </div>
    <div class="col-10">
     <Outlet/>
    </div>
  </div>

<Footer/>
    </div></>
  )
}

export default Layout
