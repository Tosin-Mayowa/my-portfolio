import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css';
import {FaAddressBook} from 'react-icons/fa';
import Cart from '../Image/shopping-cart.jpg';
import portf from '../Image/portf.jpg';
import form from '../Image/form.jpg';
function Portfolio(){

 return (
   <div className='container-fluid'>
   <h2  className='Portfolio-H'>Project Cards</h2>
  <div className="row">
    <div className='col-xs-12 col-md-6 col-lg-4 mb-2 p-1 card'>
         <img src={Cart} className="card-img-top" alt="..." />
        <h3 className='card-title'>Shopping Cart</h3>
        <p>I built this cart using react-redux,redux core libraries,hooks and Bootstrap for design,all data used are in the application</p>
        <a href='https://shopping-cart-psi-ten.vercel.app/'><FaAddressBook size={20}/></a>
    </div>
  
  <div className='col-xs-12 col-md-6 col-lg-4 p-1 mb-2 card'>
         <img src={portf} className="card-img-top" alt="..." />
        <h3 className='card-title'>My Portfolio Website</h3>
        <p>I buit this project using React,Mui,React libraries</p>
        <a href='https://mayowa-portfolio.vercel.app/'><FaAddressBook size={20}/></a>
    </div>

    

     <div className='col-xs-12 col-md-6 col-lg-4 p-1 mb-2 card'>
         <img src={form} className="card-img-top" alt="..." />
     <h3 className='card-title'>sign in form</h3>
        <p>This form has the ability to change from one language to anothe, you can also switch to dark mode, I used contextApi.</p>
        <a href='https://multilanguage-signin-form.vercel.app/'><FaAddressBook size={20}/></a>
    </div>
  </div>
    
  
   
  </div>
  
  )

}

 
   
  
  

export default Portfolio;