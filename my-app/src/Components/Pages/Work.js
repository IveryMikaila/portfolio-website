import React from 'react'
import {data} from '../Data'

const Work = () => {
 

  return (
    <div className='work-page-container'>
      {/* About */}
<h2 id='about'>Hi, I'm Mikaila.</h2>
<p>I design, code, and create art for wonderful people like you.</p>
<p>{data.Bio}</p>
<h3>My greatest strengths include: </h3>
{data.Skills.map((skill)=>{
  return(<>
  <ul>
    <li>{skill}</li>
  </ul>
  </>)
})}
<p>{data.Personal}</p>

{/* Work */}
<h3 id='work'>To see more of my work, keep scrolling. </h3>
    </div>
  )
}

export default Work;