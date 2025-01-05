import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <hr />
      <Link style={{marginRight: '10px'}} to='employee'>Çalışanlar Hakkında</Link>
      <Link to='company'>Şirket Hakkında</Link>

      <Outlet />
    </div>
  )
}

export default About