import React from 'react'
import '../../Styles/Home.css'

const Home = () => {
  return (
    <div className='home-page'>
<h1>Mikaila Ivery</h1>
<div className='home-bio' >Graphic Design, Code, Art. </div>
<ul>
    <li><a className='home-link' href='/work'>Work</a></li>
    <li><a className='home-link' href='/#about'>About</a></li>
    <li><a className='home-link' href='/contact'>Contact</a></li>
</ul>
    </div>
  )
}

export default Home;