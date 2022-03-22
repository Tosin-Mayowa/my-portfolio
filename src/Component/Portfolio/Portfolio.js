import React,{useState} from 'react'
import {Paper} from '@mui/material';
import './Portfolio.css';
import {FaGithub,FaAngleLeft, FaAngleRight} from 'react-icons/fa'
const data=[
  {id:1, title:'My Portfolio Website', text:'I buit this project using React,Mui,React libraries',src:'https://github.com/Tosin-Mayowa/my-portfolio' },
  {id:1, title:'Todo', text:'I buit this project using Reacthooks and MaterialUI',src:'https://github.com/Tosin-Mayowa/todo-app-hooks' }
  
]
const Portfolio = () => {
const [index,setIndex]=useState(0);
const [state, setState]=useState(data)
const dataContent=data[index];
const {title,text,src}=dataContent;
const handleLeft=()=>{
  if(index<0){
    setIndex(data.length-1)
  }
   if(index>0){
    setIndex(index-1)
  }
  if(index===0){
     setIndex(index)
  }
}
const handleRight=()=>{
 if(index<0){
    setIndex(index+1)
  }
   if(index>0 && index<data.length-1 ){
    setIndex(index+1)
  }
  if(index===0){
     setIndex(index+1)
  }
}
  return (
   <div className='Portfolio'>
   <h2  className='Portfolio-H'>Project slide and GitHub links</h2>
   <Paper elevation={0} className='card'>
   <h3>{title}</h3>
      <p>{text}</p>
      <a href={src}><FaGithub size={25}/></a>
   </Paper>
     <div className="arrow">
     <FaAngleLeft className="arrowL" onClick={handleLeft}/>
   <FaAngleRight className="arrowR" onClick={handleRight}/>
     </div>
  
   
  </div>
   
  )
}

export default Portfolio;