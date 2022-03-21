import React from 'react'
import {Paper, Grid} from '@mui/material';

import './About.css';
const About = () => {
  return (
    <div className='About'>
    <div className='About-left'>
    <h1 className='About-Hl'><small>Meet</small> <br/> Mayowa Tosin Adejumola</h1>
    </div>
    <diV className='About-right'>
    <p className='About-Rp'>
    I am a <span>Frontend Engineer with two years of experience. </span>I love Javascript, and I can tell you that is my strength, <br/>I love to make things work,solving complex problems.
    I have good knowledge of the following react stacks:<br/> Hooks,NEXTjs,React Router, Context Api,Redux,Material UI,Redux,React Query,Jest etc.. <br/>
    My main stacks are Javascript,React,Typescript,HTML5 and CSS3, Git.<br/>I am always ready to learn,open to corrections.
    </p>
<p className='About-Rp'>
I graduated at the top of my class with <span>Distinction</span>. As a good Mathematics student,<br/> I love solving complex problems, what many call complex problems, to me it is an oppotunity to know more.<br/>
I am the guy that used is <span>house rent to buy Laptop,I had to stay at friends place for months</span> , enter into loan to pay for my courses,this is how much I love to code and to acquire Knowledge.

</p>
    
    </diV>
    </div>
  )
}

export default About;