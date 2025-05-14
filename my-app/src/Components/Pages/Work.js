import React from 'react'
import {data} from '../Data'
import '../../Styles/Work.css'
import { motion } from "framer-motion";

const Work = () => {
 

  return (
       <motion.div
              key="page"
              initial={{ x: "20%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-20%", opacity: 0, transition: { duration: 0.2 } }}
              transition={{ delay: 0, duration: 0.2 }}
            >
    <div className='work-page-container'>

      {/* About */}
      <div className='about-section'>
<h2 id='about'>Hi, I'm Mikaila.</h2>
<p>I design, code, and create art for wonderful people like you.</p>
<p>{data.Bio}</p>
<h3>My greatest strengths include: </h3>
<div className='skills-container'>
<ul>
  <li>{data.Skills[0]}</li>
  <li>{data.Skills[1]}</li>
   <li>{data.Skills[2]}</li>
    <li>{data.Skills[3]}</li>
     <li>{data.Skills[4]}</li>
</ul>
<ul>
  <li>{data.Skills[5]}</li>
  <li>{data.Skills[6]}</li>
   <li>{data.Skills[7]}</li>
    <li>{data.Skills[8]}</li>
     <li>{data.Skills[9]}</li>
</ul>
<ul>
  <li>{data.Skills[10]}</li>
  <li>{data.Skills[11]}</li>
   <li>{data.Skills[12]}</li>
    <li>{data.Skills[13]}</li>
     <li>{data.Skills[14]}</li>
</ul>
</div>
<p>{data.Personal}</p>
</div>
{/* Work */}
<div className='work-section'>
<h3 id='work'>To see more of my work, keep scrolling. </h3>
</div>

    </div>
    </motion.div>
  )
}

export default Work;