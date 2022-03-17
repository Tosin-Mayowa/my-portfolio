import React,{useState,useEffect} from 'react';
import {Paper,Typography, Grid,Button,Avatar} from '@mui/material';
import './Header.css';
import Resume from '../Resume/Resume';
import Mayowa from '../Image/Mayowa.jpg';


const Header = () => {
    const [isClicked, setIsclicked]=useState(false);
  
    return (
       
   <Grid container >
   
   <Grid item xs={12} md={6 } lg={6}>
 
    <Paper  style={{ marginTop:'5px', height: '100vh' }} elevation={0}>
     <>
    <Typography variant="h3" style={{ fontWeight: 500,paddingTop:'40px',paddingLeft:'20px', marginTop:'20px' }} component="h4">
    I am a  
    </Typography>
    <Typography variant="h3" style={{ fontWeight: 500,color:'#00af54', paddingLeft:'20px' }} component="h4">
    Frontend Engineer <span className='Header-span'>With Passion For Solving</span>
    </Typography>
    <Typography variant="h3" style={{ fontWeight: 500,paddingLeft:'20px' }} component="h4">
    Complex Problems
    </Typography>
    <div className='Avatar-name'>
     <Avatar style={{ 
            margin:'15px auto',
            width:'150px',
            height:'150px'
           }} alt="Cindy Baker" src={Mayowa} />
           <h6 style={{ margin:'2px auto' }}> Mayowa Tosin Adejumola</h6>
    
    
    </div>
   
     
      </>    
    </Paper>
    
   </Grid>
   <Grid item  xs={12} md={6 } lg={6}>
    <Paper  style={{ marginTop:'5px', height: '100vh' }} elevation={0}>
    <Paper variant='outlined' style={{ width: '60%', height:'200px', backgroundColor:'#00af54', margin: '50px auto' }}>
     <Typography variant="h5" style={{ fontWeight: 500,paddingTop:'60px',paddingLeft:'20px', marginTop:'20px', textTransform: 'capitalize',color: 'white' }} component="p">
    Kindly view my resume here...
    </Typography>
     <Button variant="outlined" style={{ color:'white', borderColor:'white', marginLeft:'30px',marginTop:'10px' }} onClick={()=> {setIsclicked(!isClicked)}}>{isClicked?'Clicked...':'click'}</Button>
    </Paper>
    {isClicked?<Resume/>:''}
    </Paper>
    
   </Grid>
    
   </Grid>

  )
}

export default Header