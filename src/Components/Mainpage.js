import React from 'react'
import ti from '../Assets/travel1.jpg';
const Mainpage = () => {
  return (
    <>

     <div className='p1d1'>
     <img src={ti} alt="" style={{width:'100%'}} /> 
        <h1 className='p1h1'>Travel agency</h1>
        <p className='p1p1'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <button className='p1btn'>Learn More..</button>
     </div>
    </>
  )
}

export default Mainpage
