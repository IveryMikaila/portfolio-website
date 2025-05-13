import React from 'react'
import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react'
import '../Styles/Navbar.css'


const Navbar = () => {
 const [isOpen, setOpen] = useState(false)

 function NavOpen (){
return(<>
<div className='nav-menu'>
 <a className='nav-link' href='/'>Home</a>
 <a  className='nav-link' href='/work'>Work</a>
 <a  className='nav-link' href='/contact'>Contact</a>
</div>
</>)

 }

  return (
    <div>

<div className='hamburger-container'>
<Hamburger toggled={isOpen} toggle={setOpen} color='white' />
</div>

{isOpen ? <NavOpen /> : <div style={{display:"none"}}></div> }



    </div>
  )
}

export default Navbar;