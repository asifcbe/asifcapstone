import React from 'react'
import Directory from '../directory/directory.component'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
        <Directory />;
    </div>
  )
}

export default Home