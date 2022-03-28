import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './About.css';
const About = () => {
  return (
    <div className='container-fluid About mt-0'>
    <div className='row'>
    <div className='col-xs-12 col-md-12 col-lg-4 About-Hl'>
    <h1 className=' text-white '><small className='small'>Meet</small> <br/> Mayowa Tosin Adejumola</h1>
    </div>
    <diV className='col-xs-12 col-md-12 col-lg-8 p-4 mt-3 text-white'>
    <p className='Abt-Rp'>
    I am a <span>Frontend Engineer with two years of experience. </span>I love Javascript, and I can tell you that is my strength,I love to make things work,solving complex problems.
    I have good knowledge of the following react stacks: Hooks,NEXTjs,React Router, Context Api,Redux,Material UI,Redux,React Query,Jest etc..
    My main stacks are: Javascript,React,Typescript,HTML5 and CSS3, Git.I am always ready to learn,open to corrections. 
    </p>
<p className='mt-2 Abt-Rp '>
I graduated at the top of my class with <span>Distinction</span>. As a good Mathematics student, I love solving complex problems, When it comes to web page functionality, I am your guy.
<span  className='pa'>I am the guy that used is house rent to buy Laptop,I had to stay at friends place for months , enter into loan to pay for my courses,this is how much I love to code and to acquire Knowledge.</span>

</p>
    
    </diV>
    </div>
    
    </div>
  )
}

export default About;