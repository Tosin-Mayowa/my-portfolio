import React from 'react'
import {Paper,Typography, Grid,Button,Avatar} from '@mui/material';
import './Portfolio.css';
import {FaGithub} from 'react-icons/fa'
const Portfolio = () => {
  return (
   <div className='Portfolio'>
   <h2  className='Portfolio-H'>Project List and GitHub links</h2>
   <ul  className='List'>
   <li  className='ListItem'>
   <h3 className='Inner-H'>Todo App:</h3>
   <p className='Portfolio-p'>In this project I use Hooks(useState,custom hooks, and useEffect) for state management,<br/> I used UseEffect to store todo task in the local storage(this is allowed for small project) so that, each time we refresh the page the data will still be retained on the browser. The useEffect is made to run only when new task is added. I use Material ui for the design.</p>
   <a href="https://github.com/Tosin-Mayowa/todo-app-hooks"><FaGithub size={20}/></a>
   </li>
   <li className='ListItem'>
 <h3 className='Inner-H'>Sign in form:</h3>
   <p className='Portfolio-p' style={{ color:'#bb0a21' }}>This is a form I built using context Api to transfer data. <br/> This form can change from one language to another also the background can be switched to dark mode</p>
   <a href="https://github.com/Tosin-Mayowa/"><FaGithub size={20}/></a>
   </li>
   </ul>

   <p className='Portfolio-p'>You can visit my github account where all my projects are stored,I am currently working on some other projects using Nextjs, and redux</p>
   </div>
  )
}

export default Portfolio;