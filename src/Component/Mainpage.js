import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Dashboard from './Dashboard.js'
import Employee from './Employee.js'

const Mainpage = () => {
  return (
    <div>
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/employee" element={<Employee/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Mainpage