import React,{useState,useEffect} from 'react'
import { TextField} from '@mui/material';
import './Contact.css';
const Contact = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [num,setNum]=useState(null);
  const [msg,setMsg]=useState('') 
  const [isSubmit, setIsSubmit]=useState(true)
  const handleName=(e)=>{
    setName(e.target.value);
  }

  const handleEmail=(e)=>{
    setEmail(e.target.value);
  }

  const handleMsg=(e)=>{
    setMsg(e.target.value);
  }

  const handleNum=(e)=>{
    setNum(e.target.value);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setIsSubmit(!isSubmit);
    setName('');
    setNum(null);
    setEmail('');
    setMsg('');

  }
useEffect(()=>{
  setTimeout(()=>{
  setIsSubmit(true);
},3000)
},[isSubmit])
 
  return (
<div className='Form-div'>
    <h2 className='Form-title'>contact</h2>
    <p style={{ color:'white',textAlign:'center', fontStyle:'italic' }}>+2348069827799,+2347010348022 <br/> toss800@gmail.com <br/>17,Love Estate IKorodu, Lagos Nigeria.</p>
  
  { isSubmit?
   <div className="container"  style={{ width:'40%'}}>
     <h3 className='Form-titletwo'>Leave me a message</h3>
  <form className='form' onSubmit={handleSubmit} style={{ color:'5px' }}>
    <TextField onChange={ handleName} style={{ color:'white' }} className='Text-1'  label="Name" variant="standard" value={name} />
    <TextField onChange={handleEmail} style={{ color:'white' }}   label="Email" variant="standard" value={email} />
    <TextField onChange={handleNum} style={{ color:'white' }}   label="PhoneNo" variant="standard" value={num} />
     <TextField
     style={{ marginTop:'20px', color:'white'}}
          id="outlined-multiline-static"

          multiline
          rows={4}
          defaultValue="message"
        />
        <button style={{ marginTop:'5px',borderRadius:'5px', }}>submit</button>
    </form>
      </div>
      
  :
     
      <div>
       <h3 className='Form-titletwo' style={{ marginTop:'10px' }}>Thank you for your message</h3>
       </div>
     
     
  } 
</div>
  )
}

export default Contact;