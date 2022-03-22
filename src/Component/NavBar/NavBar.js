import React,{useState} from 'react'
import './NavBar.css';
import {Link} from 'react-router-dom';
import Logo from '../Image/realLogo.png';
import {FaBars,FaTimes,FaLinkedin,FaGithub} from 'react-icons/fa'

const NavBar = () => {
  const [isClick,setIsClick]=useState(true);
  return (
    <header className='header'>
    <nav className='NavBar'>
<div className='logo-menu'>
<img className='logo navbar-brand' src={Logo} alt='logo...'/>
<a style={{color:'white'}} href='https://www.linkedin.com/in/tosin-adejumola-389992137' size={25}><FaLinkedin/></a>
<a style={{ marginLeft:'6px', color:'white' }} href='https://github.com/Tosin-Mayowa/' size={25}><FaGithub/></a>
</div>
<ul className={isClick?'Nav-ul':'Nav-ul show'}>
<li className='Nav-item'><Link className={isClick?'Nav-link':'link-show'} to='/'>Home</Link></li>
<li className='Nav-item'><Link className={isClick?'Nav-link':'link-show'} to='/about'>About me</Link></li>
<li className='Nav-item'><Link className={isClick?'Nav-link':'link-show'} to='/portfolio'>Portfolio</Link></li>
<li className='Nav-item'><Link className={isClick?'Nav-link':'link-show'} to='/contact'>Contact</Link></li>
</ul>
</nav>
  <div className='menu-bar'>
{isClick?(<FaBars size={20} style={{color:'#fff'}} onClick={()=>setIsClick(!isClick)}/>):(<FaTimes size={20} style={{color:'#fff'}} onClick={()=>setIsClick(!isClick)}/>)}
  </div>
  </header>
  )
}

export default NavBar;