import React from 'react'
import "./Header.css"
import logo from "./image/logo.png"
import cart from "./image/cart.png"
import contact from "./image/contact.png"
import country from "./image/country.png"
import search from "./image/search.png"
import Button from '../Button'
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <div>
         <div className='navb '>
            <div className='navb1'>
                <img className='navb1img' alt='..' src={logo}/>
                <div id='inpk'>
                     <input id='navb1in' type='text' placeholder='Search for art, kids, abstract wallpapers'/>
                     <button id='navb1b' ><img src={search} alt='..'/></button>

                </div>
                <div>
                    <img className='navb1img2' alt='..' src={contact}/>

                </div>
                <div>
                    <img className='navb1img3' alt='..' src={country}/>

                </div>
                <div>
                    <img className='navb1img3' alt='..' src={cart}/>

                </div>
                <div id='navlbut'>
                     <Link to="/login">
                     <Button txt="Login"/>
                    </Link> 
                    
                   




                    
                </div>
                
                
               
            </div>
            <div className='navb2'>
                <span>Wallpaper</span>
                <span>Flooring</span>
                <span>3D Panel</span>
                <span>Blinds</span>
                <span>Artificial Grass</span>
                <span>PVC Foam Sheet</span>
                <span>GYM Flooring</span>
                <span>Room Visualizer</span>
                <span>E-Catalouge</span>
            </div>

        </div>


    </div>
  )
}

export default Header