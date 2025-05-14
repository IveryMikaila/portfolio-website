import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { Squash as Hamburger } from 'hamburger-react'
import '../Styles/Navbar.css'


const Navbar = () => {
 const [isOpen, setOpen] = useState(false);
 const location = useLocation();

function homeNavigation (){
let hamburger = document.getElementById("hamburger-container");

   if(location.pathname=="/work" || location.pathname=="/contact"){
    hamburger.style.display="block"
   } else if (location.pathname=='/'){
hamburger.style.display="none"
   }
}

 function NavOpen (){
return(<>
<div className='nav-menu'>
 <Link reloadDocument className='nav-link' to='/'>Home</Link>
 <Link reloadDocument className='nav-link' to='/work#work'>Work</Link>
 <Link reloadDocument className='nav-link' to='/contact'>Contact</Link>
</div>
</>)

 }

 useEffect(()=>{
homeNavigation();
 },[])

  return (
    <div>

<div className='hamburger-container' id='hamburger-container'>
<Hamburger toggled={isOpen} toggle={setOpen} color='white' />
</div>

{isOpen ? <NavOpen /> : <div style={{display:"none"}}></div> }



    </div>
  )
}

export default Navbar;