import React from 'react'
import Header from './Header'
import Sidenav from './Sidenav'
import Card from './Card'

const Employee = () => {
  return (
    <div className='employee'>
        <Header/>
        <Sidenav/>
        <Card/>
    </div>
  )
}

export default Employee