import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import NavBar from './Component/NavBar/NavBar';

function App(){

    return (
        <>
        <NavBar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
</Routes>
</>
    )
}


export default App;
