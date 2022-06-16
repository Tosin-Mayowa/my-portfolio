
import {useState,useEffect} from 'react';
import './SlideShow.css';
import Cart from '../Image/shopping-cart.jpg';
import portf from '../Image/portf.jpg';
import form from '../Image/form.jpg';
 const banners=['banner', 'banner1', 'banner2'];
const backGround=(arr)=>{
    let index=Math.floor(Math.random()*arr.length);
return  arr[index];

} 
export default function SlideShow(){
  
    return(
        <div className='banner' >
    <h2 className='heading'>Thank you for taking time to check my portfolio</h2>
        </div>
    )
}