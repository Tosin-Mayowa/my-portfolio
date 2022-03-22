import React,{useState,useEffect} from 'react';
import {Paper,Typography, Grid,Button,Avatar} from '@mui/material';
import './Header.css';
import Resume from '../Resume/Resume';
import Mayowa from '../Image/Mayowa.jpg';
import Skills from '../Skills/Skills';


const Header = () => {
    const [isClicked, setIsclicked]=useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setIsclicked(false);
    },10000);
  })
    return (
       
   <Grid container >
   
   <Grid item xs={12} md={6 } lg={6}>
 
    <Paper className='Paper-Header' style={{ height: '100vh', padding:'0 1rem' }} elevation={0}>
    <div>
     <h1 className='Typo-left'>I am a <br/> <span style={{ color:'#bb0a21' }}>Frontend Engineer</span> with passion<br/> for solving complex problems</h1>
  </div>
    
    <div className='Avatar-div'>
     <Avatar  style={{ 
            margin:'20px auto',
            
            width:'150px',
            height:'150px'
           }} alt="Cindy Baker" src={Mayowa} />
           <h6 className='Avatar-title' style={{ margin:'2px auto' }}> Mayowa Tosin Adejumola</h6>
    
    
    </div>
   
    </Paper>
    
   </Grid>
   <Grid item  xs={12} md={6 } lg={6}>
    <Paper  style={{ height: '100vh', paddingTop:'1rem' }} elevation={0}>
    <Paper variant='outlined' elevation={2} className='side-paper' style={{ width: '60%', height:'200px', backgroundColor:'#bb0a21', margin: '0 auto',padding:'2rem 1rem', overflow:'hidden', borderRadius:'10px' }}>
    <h2 style={{ color:'#fff' }}>Click to view my resume</h2>
     <Button className='side-button' variant="outlined" style={{ color:'white', borderColor:'white', marginLeft:'30px',marginTop:'10px' }} onClick={()=> {setIsclicked(!isClicked)}}>{isClicked?'Clicked...':'click'}</Button>
    </Paper>
    {isClicked?<Resume/>:<Skills/>}
    </Paper>
    
   </Grid>
    
   </Grid>

  )
}

export default Header;