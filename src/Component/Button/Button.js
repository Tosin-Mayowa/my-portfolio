import React from 'react';
import { HiChatAlt2 } from "react-icons/hi";
import './Button.css';
export default function Button(){
const [click, setClick]=React.useState(false);
const [state,setState]=React.useState('');


if(click){
    return (
        <form className='inp'>
        <label htmlFor="chat">How can we help?
        <input type="text" id='chat' onChage={(e) => {
                    setState(e.target.value);
                }} />
        </label>
            
        </form>
    )
}
return(
    <div>
    <button className='Btn' onClick={()=>{
setClick(!click)
    }}><HiChatAlt2 className='chat'/>Chatlive</button>
    </div>
)
    
}