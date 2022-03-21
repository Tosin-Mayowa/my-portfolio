import React from 'react'
import {Paper,Divider} from '@mui/material';
import ReactTypingEffect from 'react-typing-effect';
import './Skill.css';
const Skills = () => {
  return (
    <Paper variant='outlined'  style={{ width: '70%', height:'200px', backgroundColor:'#252627', margin: '50px auto', textAlign:'center' }}>
     <h1 className='Typed-H'>My main stacks</h1>
     <Divider/>
<ReactTypingEffect
className='Typed'
        text={["Javascript +Es6.", "ReactJs", "Typescript", "Git", "HTML5 + Css3", "Adobe Illustrator"]}
      />
    </Paper>
  )
}

export default Skills;
