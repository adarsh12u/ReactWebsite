import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
<nav>
   <h1>TechSolution.</h1>
   <main>
    <Link to={"/"}>Home</Link>
    <a href={"/#about"}>About</a>
    <Link to={"/contactus"}>Contact us</Link>
    <a href={"/#brands"}>Brands</a>
    <a href={"/#services"}>Services</a>
    </main>
    </nav>  
  )
}
