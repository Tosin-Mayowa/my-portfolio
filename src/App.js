import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import NavBar from './Component/NavBar/NavBar';
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';

function App(){

    return (
        <>
        <NavBar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/portfolio' element={<Portfolio/>}/>
<Route path='/contact' element={<Contact/>}/>
</Routes>

</>

    )
}


export default App;
