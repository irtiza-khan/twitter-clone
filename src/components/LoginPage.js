import React from 'react'
import { Button, Form, FormGroup, Label, Input,Col } from 'reactstrap';
import { FaTwitter } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { useState } from 'react';
import { Link } from "react-router-dom";
const LoginPage = ({ onAuth })=> {
      const [email,setEmail] = useState('') 
      const [password, setPassword] = useState('') 
      const[status,setState] = useState(); 
      
      const onSubmit = (e) => {
          //TODO: Add validation on  input fields use libray for validations 
        e.preventDefault();
           if(!email || !password ){
               alert('Please fill all the fields');

           }else{
                   
              const cath =  onAuth({email,password});
              setState(cath);
              setEmail('');
              setPassword('');
        

           } 
      }

    return (
        <React.Fragment>
            <div className='login-container'>
                <div className="left-login-container">
                    {/* <h1 style={{color:'black'}}>{status? 'Logged In' : 'Logged in failed'}</h1> */}
                    <IconContext.Provider value={{color: 'white', size: '25em',className:'twitter-icon '}}>
                        <div>
                            <FaTwitter />
                            <h1 style={{textAlign:'center'}}>Happening now</h1>
                        </div>
                    </IconContext.Provider>                  
                </div>

                <div className="right-login-container">
                <Form onSubmit={onSubmit}>
                <Col md={6}>
                    <FormGroup  className="mb-5 mt-4">
                        <Label for="exampleEmail" style={{color:'white'}}>Email</Label>
                        <Input type="email" name="email" value= {email} onChange={(e) => setEmail(e.target.value)} id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    </Col>  
                    <Col md={6}>
                    <FormGroup  className="mb-5">
                    <Label for="examplePassword"  style={{color:'white'}}>Password</Label>
                    <Input type="password" value={password} onChange= {(e) => setPassword(e.target.value)} name="password" id="examplePassword" placeholder="Password" />
                    </FormGroup>
                    </Col>  
                    <Button className={"mb-5"} type="submit" style={{borderRadius: '14px' , padding: '16px' , border: '2px solid #1da1f2' , color:'#1da1f2', fontWeight:'bold',fontSize:'20px',width:'50%'}} outline >Login</Button>{' '}
                    </Form>
                 <Link to="/signUp"><Button style={{borderRadius: '14px' , padding: '16px' , backgroundColor:'#1da1f2', color:'white', fontWeight:'bold',fontSize:'20px',width:'50%'}} >Sign Up</Button>{' '}</Link>   

                </div>              
            </div>
        </React.Fragment>   
    )
}




export default LoginPage
