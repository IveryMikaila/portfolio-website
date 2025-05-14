import React from 'react'
import '../../Styles/Home.css'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
  


const Home = () => {
  return (
      <motion.div
      key="page"
      initial={{ x: "20%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-20%", opacity: 0, transition: { duration: 0.2 } }}
      transition={{ delay: 0, duration: 0.2 }}
    >
    <div className='home-page'>
<h1>Mikaila Ivery</h1>
<div className='home-bio' >Graphic Design, Code, Art. </div>
<ul>
    <li><Link className='home-link' reloadDocument to='/work#work'>Work</Link></li>
    <li><Link className='home-link' reloadDocument  to='/work#about'>About</Link></li>
    <li><Link className='home-link' reloadDocument to='/contact'>Contact</Link></li>
</ul>
    </div>
    </motion.div>
  )
}

export default Home;