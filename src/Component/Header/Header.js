import React,{useState,useEffect} from 'react';
import {Paper, Grid, Button, Avatar} from '@mui/material';
import './Header.css';
import Resume from '../Resume/Resume';
import Mayowa from '../Image/Mayowa.jpg';
import Skills from '../Skills/Skills';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    const [isClicked, setIsclicked]=useState(false);


/* const changeStatus=()=>{
  setTimeout(() => {
    setStatus(true);
  }, 2000);
} */

  useEffect(()=>{
    setTimeout(()=>{
      setIsclicked(false);
    },30000);
  })
    return (
       <div className="container-fluid">
       <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-6 mt-3">
          <div>
            <h1 className='Typo-left'> <br /> <span style={{ color: '#247ba0' }}>Frontend Engineer</span> with passion<br /> for solving complex problems</h1>
          </div>
            <div className='Avatar-div'>
              <Avatar style={{
                margin: '20px auto',

                width: '150px',
                height: '150px'
              }} alt="Cindy Baker" src={Mayowa} />
              <h6 className='Avatar-title' style={{ margin: '2px auto' }}> Mayowa Tosin Adejumola</h6>


            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-6mt-3">
          <div className='side-paper Paper' >
            <h2 style={{ color: '#fff' }}>Click to view my resume</h2>
            <Button className='side-button' variant="outlined" onClick={() => { setIsclicked(!isClicked) }}>{isClicked ? 'Clicked' : 'click'}</Button>
          </div>
            {isClicked ? <Resume /> : <Skills />}
          </div>
       </div>
       </div>
  

  )
}

export default Header;
/* <Grid container >

  <Grid item xs={12} md={12} lg={6}>

    <Paper className='Paper-Header' style={{ height: '100vh', padding: '1rem 1rem' }} elevation={0}>
      <div>
        <h1 className='Typo-left'>I am a <br /> <span style={{ color: '#247ba0' }}>Frontend Engineer</span> with passion<br /> for solving complex problems</h1>
      </div>

      <div className='Avatar-div'>
        <Avatar style={{
          margin: '20px auto',

          width: '150px',
          height: '150px'
        }} alt="Cindy Baker" src={Mayowa} />
        <h6 className='Avatar-title' style={{ margin: '2px auto' }}> Mayowa Tosin Adejumola</h6>


      </div>

    </Paper>

  </Grid>
  <Grid item xs={12} md={12} lg={6}>
    <Paper style={{ height: '100vh', paddingTop: '2rem' }} elevation={0}>
      <div className='side-paper Paper' onMouseEnter={changeStatus} >
        <h2 style={{ color: '#fff' }}>{status ? 'Thank you for checking' : 'Click to view my resume'}</h2>
        <Button className='side-button' variant="outlined" onClick={() => { setIsclicked(!isClicked) }}>{isClicked ? 'Clicked' : 'click'}</Button>
      </div>
      {isClicked ? <Resume /> : <Skills />}
    </Paper>

  </Grid>

</Grid> */