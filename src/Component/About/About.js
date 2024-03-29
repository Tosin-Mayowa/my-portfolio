import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './About.css';
import Mayowa from '../Image/Mayowa.jpg';
const About = () => {
  return (
    <div className='container-fluid About mt-0 h-75'>
    <div className='row'>
    <div className='col-xs-12 col-md-12 col-lg-3 About-Hl'>
    <h1 className=' text-white '><small className='small'>Meet</small> <br/> Mayowa Tosin Adejumola</h1>
    <div className="balls">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
    </div>      
    </div>
    <diV className='col-xs-12 col-md-12 col-lg-9 p-4 mt-3 h-100 text-white'>
    <p className='Abt-Rp'>
    I am a <span>Frontend Engineer with two years of experience. </span>I love Javascript, and I can tell you that is my strength,I love to make things work,solving complex problems.
    I have good knowledge of the following react stacks: Hooks,NEXTjs,React Router, Context Api,Redux,Material UI,Redux,React Query,Jest etc..
    My main stacks are: Javascript,React,Typescript,HTML5 and CSS3, Git.I am always ready to learn,open to corrections. 
    </p>
<p className='mt-2 Abt-Rp '>
I graduated at the top of my class with <span>Distinction</span>. As a good Mathematics student, I love solving complex problems, When it comes to web page functionality, I am your guy.
<span  className='pa'>I am the guy that used is house rent to buy Laptop,I had to stay at friends place for months , enter into loan to pay for my courses,this is how much I love to code and to acquire Knowledge.</span>

</p>
   <div class="text-center">
  <img src={Mayowa} class="img-thumbnail Image"  alt="..."/>
</div>
    </diV>
    </div>
    
    </div>
  )
}

export default About;