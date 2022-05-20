import React,{useState,useEffect} from 'react';
import { Button, Avatar} from '@mui/material';
import './Header.css';
import Resume from '../Resume/Resume';
import Mayowa from '../Image/Mayowa.jpg';
import Skills from '../Skills/Skills';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    const [isClicked, setIsclicked]=useState(false);




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
            <h1 className='Typo-left'>I am a<br /> <span style={{ color: '#247ba0' }}>Frontend Engineer</span> with passion<br /> for solving complex problems</h1>
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
          <div className="col-xs-12 col-md-6 col-lg-6 mt-3">
          <div className='side-paper Paper' >
            <h2 className='heading2' style={{ color: '#fff' }}>Click to view my resume</h2>
            <Button className='side-button' variant="outlined" onClick={() => { setIsclicked(!isClicked) }}>{isClicked ? 'Clicked' : 'click'}</Button>
          </div>
            {isClicked ? <Resume /> : <Skills />}
          </div>
       </div>
       </div>
  

  )
}

export default Header;
