import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css';
import Cart from '../Image/shopping-cart.jpg';
import portf from '../Image/portf.jpg';
import form from '../Image/form.jpg';
import Sharp from '../Image/Sharp.jpg';
import Graph from '../Image/Graph.jpg';
function Portfolio(){

 return (
   <div className='container-fluid'>
   <h2  className='Portfolio-H'>Project Cards</h2>
  <div className="row">
    <div className='col-xs-12 col-md-6 col-lg-4 mb-2 p-1 card'>
         <img src={Cart} className="card-img-top" alt="..." />
        <h3 className='card-title'>Shopping Cart</h3>
        <p>I built this cart using react-redux,redux core libraries,hooks and Bootstrap for design,all data used are in the application</p>
         <a href='https://shopping-cart-psi-ten.vercel.app/' class="text-decoration-none">View</a>
    </div>
  
 

    <div className='col-xs-12 col-md-6 col-lg-4 p-1 mb-2 card'>
         <img src={portf} className="card-img-top" alt="..." />
        <h3 className='card-title'>My Portfolio Website</h3>
        <p>I buit this project using React,Mui,React libraries</p>
         <a href='https://mayowa-portfolio.vercel.app/' class="text-decoration-none">View</a>
    </div>

     <div className='col-xs-12 col-md-6 col-lg-4 p-1 mb-2 card'>
         <img src={Sharp} className="card-img-top" alt="..." />
        <h3 className='card-title'>SharpSharp</h3>
        <p>This is a fullstack Ecommerce platform, built with Nextjs,Typescript,React Table,Chakra-Ui,and using Nextjs Api server for the backend and axios custom instance for API calls. Code in github for your reference. </p>
     
         <a href='https://github.com/Tosin-Mayowa/sharpsharp-ecomm' class="text-decoration-none">View</a>
    </div>

    <div className='col-xs-12 col-md-6 col-lg-4 p-1 mb-2 card'>
         <img src={Graph} className="card-img-top" alt="..." />
        <h3 className='card-title'>My Junior React</h3>
        <p>This is an ecommerce project built with React,GraphQL,Redux. I consumed the GraphQL APIs using Apollo client on the frontend,using class compnent in react. Find the code on github for your reference</p>
         <a href='https://github.com/Tosin-Mayowa/mayowaadejumola-junior-react' class="text-decoration-none">View</a>
    </div>

     <div className='col-xs-12 col-md-6 col-lg-4 p-1 mb-2 card'>
         <img src={form} className="card-img-top" alt="..." />
     <h3 className='card-title'>sign in form</h3>
        <p>This form has the ability to change from one language to anothe, you can also switch to dark mode, I used contextApi.</p>
         <a href='https://multilanguage-signin-form.vercel.app/' class="text-decoration-none">View</a>
    </div>
  </div>
    
  
   
  </div>
  
  )

}

 
   
  
  

export default Portfolio;