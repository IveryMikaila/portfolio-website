import React from 'react'
import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react'


const Navbar = () => {
 const [isOpen, setOpen] = useState(false)

 function NavOpen (){
return(<>
<div>
 <a href='/'>Home</a>
 <a href='/work'>Work</a>
 <a href='/contact'>Contact</a>
</div>
</>)

 }

  return (
    <div>


<Hamburger toggled={isOpen} toggle={setOpen} className='nav-hamburger' />
{isOpen ? <NavOpen /> : <div style={{display:"none"}}></div> }

    </div>
  )
}

export default Navbar;