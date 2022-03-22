import React from 'react'
import {Paper,Divider} from '@mui/material';
import ReactTypingEffect from 'react-typing-effect';
import './Skill.css';
const Skills = () => {
  return (
    <Paper variant='outlined' elevation={2} style={{ width: '70%', height:'200px', backgroundColor:'#bb0a21', margin: '50px auto', textAlign:'center', borderRadius:'10px' }}>
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
