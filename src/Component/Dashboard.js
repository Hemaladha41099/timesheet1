import React from 'react'
import Sidenav from './Sidenav.js'
import Header from './Header.js'
import Content from './Content.js'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <Sidenav/>
        <Header/>
        <Content/>

    </div>
  )
}

export default Dashboard