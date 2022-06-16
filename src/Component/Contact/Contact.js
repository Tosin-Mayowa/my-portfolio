import React,{useState,useEffect} from 'react'
import { TextField} from '@mui/material';
import './Contact.css';
import Button from '../Button/Button'
const Contact = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [num,setNum]=useState(null);
  
  const [isSubmit, setIsSubmit]=useState(false)
  const handleName=(e)=>{
    setName(e.target.value);
  }

  const handleEmail=(e)=>{
    setEmail(e.target.value);
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
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Name</label>
              <input type="text" data-testid="fnames" name="firstName" class="form-control" id="exampleFormControlInput1"/>
            </div>
              
            <div class="mb-3">
                <label for="exampleFormControlInput2" class="form-label">Email address</label>
                <input type="email" data-testid="email" name="emailAdd" class="form-control" id="exampleFormControlInput2" />
            </div>

                <div class="mb-3">
                  <label for="exampleFormControlInput3" class="form-label">Email address</label>
                  <input type="tel" data-testid="tel" class="form-control" id="exampleFormControlInput3" />
            </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea4" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea4" rows="3"></textarea>
              </div>
  
        <button>submit</button>
    </form>
      </div>
      
  :
     
      <div>
       <h3 className='Form-titletwo' style={{ marginTop:'10px', color:'#fff' }}>Thank you for your message</h3>
       </div>
     
     
  } 
      <Button />
</div>

  )
}

export default Contact;