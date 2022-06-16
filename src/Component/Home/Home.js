import React from 'react';
import Header from '../Header/Header';
import './Home.css';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import SlideShow from '../SlideShow/SlideShow';
 const Home=()=>{

    return(
        <div>
        <Header/>
        <About/>
        <Portfolio/>
        <SlideShow />
        <Contact/>
        </div>
    )
}
export default Home;