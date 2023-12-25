import React from 'react'
import { Link } from 'react-router-dom'
import ThisRouter from './MyRouter'



const Home = () => {
  return (
    <div>
      <h1>HEllo Sir, Welcome To Our Home PAge</h1>
      <ul>

<li><Link to="/">Go To Ho me Page</Link></li>
<li><Link to ="/contact">Go TO Contact Page</Link></li>
<li><Link to ="/about">Go TO About Page</Link></li>
</ul>
    
    </div>
  )
}

export default Home
