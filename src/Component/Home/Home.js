import React from 'react';
import Header from '../Header/Header';
import './Home.css';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';

 const Home=()=>{

    return(
        <div>
        <Header/>
        <About/>
        <Portfolio/>
        <Contact/>
        </div>
    )
}
export default Home;