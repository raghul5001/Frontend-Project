import React from 'react'
import "./Homepg.scss"
import img1 from "./Images/image 56.png"
import msg from "./Images/Group 281.png"
import box from "./Images/Group 514052.png"
import bulb from "./Images/Group 514048.png"
import ppl from "./Images/Group 514050.png"
import shld from "./Images/Group 514049.png"
import truck from "./Images/Group 514051.png"
import dots from "./Images/Group 27293.png"

function Homepg() {
  return (
    <div>
         <div className='imgtextcont'>
      <img src={img1} className='wallpaper'/>
    <div className='imagetxt'>
      <h1 className='wallantics'>WALLANTICS</h1>
      <label className='smalltxt'>A Stylish and most beautiful Wallpapers</label>
    </div>  
      <img src={dots} className='dots'/>
      <img src={msg} className='msg'/>
  </div>
  <h2 className='why'>Why WALLANTICS?</h2>
  <div className='two'>
   <div>
      <img src={box} className='box'/><br/>
      <h3 className='col'>1500+</h3>
      <label>Collections</label>
   </div>
   <div>
       <img src={bulb} className='bulb'/>
       <h3 className='year'>10 Years</h3>
       <label>of Innovation</label>
       

   </div>
   <div className='people'>
       <img src={ppl} className='ppl'/>
      <center><h3 className='million'>1 Million+</h3>
       <label>Customers</label>
      </center> 

   </div>
      <div>
       <img src={shld} className='shld'/>
       <h3 className='long'>Long life</h3>
        <label>Durability</label>

   </div>
   <div>
       <img src={truck} className='truck'/>
       <h3 className='free'>Free</h3>
        <label>24x7 Delivery</label>

   </div>
 


  </div>
    
    </div>
  )
}

export default Homepg