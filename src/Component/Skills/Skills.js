import React from 'react'
import {Paper,Divider} from '@mui/material';
import ReactTypingEffect from 'react-typing-effect';
import './Skill.css';
const Skills = () => {
  return (
    <Paper variant='outlined' elevation={0} style={{ width: '70%', height:'150px', backgroundColor:'#247ba0', margin: '50px auto', textAlign:'center' }}>
     <h1 className='Typed-H'>My main stacks</h1>
     <Divider/>
<ReactTypingEffect
className='Typed'
        text={["Javascript +Es6.", "ReactJs","Next-Typescript", "Redux","Typescript", "GrapQL","Git", "HTML5 + Css3","Chakra-ui","Jira" ,"Adobe Illustrator"]}
      />
    </Paper>
  )
}

export default Skills;
