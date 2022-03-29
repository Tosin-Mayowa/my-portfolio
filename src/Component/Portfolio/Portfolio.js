import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css';
import {FaAddressBook} from 'react-icons/fa'


function Portfolio(){

 return (
   <div className='container-fluid'>
   <h2  className='Portfolio-H'>Project Cards</h2>
  <div className="row">
    <div className='col-xs-12 col-md-6 col-lg-4 p-1 mb-2 card'>
        <h3 className='card-title'>My Portfolio Website</h3>
        <p>I buit this project using React,Mui,React libraries</p>
        <a href='https://mayowa-portfolio.vercel.app/'><FaAddressBook size={20}/></a>
    </div>

    <div className='col-xs-12 col-md-6 col-lg-4 mb-2 p-1 card'>
        <h3 className='card-title'>Todo App</h3>
        <p>I buit this project using class component and CSS3</p>
        <a href='https://mayowa-portfolio.vercel.app/'><FaAddressBook size={20}/></a>
    </div>

     <div className='col-xs-12 col-md-6 col-lg-4 p-1 mb-2 card'>
        <h3 className='card-title'>sign in form</h3>
        <p>This form has the ability to change from one language to anothe, you can also switch to dark mode, I used contextApi.</p>
        <a href='https://multilanguage-signin-form.vercel.app/'><FaAddressBook size={20}/></a>
    </div>
  </div>
    
  
   
  </div>
  
  )

}

 
   
  
  

export default Portfolio;