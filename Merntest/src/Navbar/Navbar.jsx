import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div>
        <nav>
            <div className='search'>
                <button className='searchButton'><i class="fa-solid fa fa-magnifying-glass"></i></button>
                <input type="search" placeholder='Search 8,000+ tutorials' name="" id="" />
            </div>
            <p>freeCodeCamp <i class="fa-brands fa-free-code-camp"></i></p>
            <div className='d-flex gap-2'>
                <button className='butn menu'>Menu</button>
                <Link to={'/signup'} className=' butn sign'>Sign in</Link>
            </div>
        </nav>
    </div>
</>
  )
}

export default Navbar