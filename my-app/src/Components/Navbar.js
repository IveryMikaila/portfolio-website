import React from 'react'
import { useLocation } from 'react-router-dom';
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
 <a className='nav-link' href='/'>Home</a>
 <a  className='nav-link' href='/work'>Work</a>
 <a  className='nav-link' href='/contact'>Contact</a>
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