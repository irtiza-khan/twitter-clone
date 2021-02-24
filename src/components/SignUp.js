import React from 'react'
import { Button, Form, FormGroup, Label, Input,Col, FormText } from 'reactstrap';
import { useState } from 'react';
import 'firebase/storage';


const SignUp = ({auth, database , storage})=> {
    const [email,setEmail] = useState('') 
    const [password, setPassword] = useState('')  
    const [name, setName] = useState('');
    const [fullName , setFullName] = useState('')
    const [contact, setContact] = useState('');
    const [profile, setProfile] =  useState(null)



    //Setting file state 
    const handleFile =  (e) => {
        if(e.target.files[0]){
            setProfile(e.target.files[0]);
        }
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        
          const upload =  storage.ref(`images/${profile.name}`).put(profile);
         upload.on("state_changed", 
           snapshot => {
               console.log(snapshot)
           },
           error => {
               console.log(error.code)
           },
           () => {
                storage.ref('images').child(profile.name).getDowloadURL()
                .then(url => {
                    console.log(`Profile Image can be downloaded from here  ${url}`);
                })
           }
         );

    } 
    
    return (
        <React.Fragment>
           <div className="signUp-container">  
               <div className= "sign-form">
                 <h3>Create An Account </h3>

                 <Form onSubmit={handleSubmit}>
                <Col md={8}>
                    <FormGroup  className="mb-5 mt-4 py-2" >
                        <Label for="exampleEmail" >Email</Label>
                        <Input type="email" name="email" value= {email} onChange={(e) => setEmail(e.target.value)}   id="exampleEmail" placeholder="with a placeholder"/>
                    </FormGroup>
                    </Col>  
                    
                <Col md={8}>
                    <FormGroup  className="">
                        <Label for="exampleUsername" >Username</Label>
                        <Input type="text" name="username" value={name} onChange= {(e) => setName(e.target.value)} id="exampleUsername" placeholder="Username" />
                    </FormGroup>
                    </Col>  
                    <Col md={6}>
                    <FormGroup  className="mb-5">
                    <Label for="examplePassword" >Password</Label>
                    <Input type="password"  name="password" value={password} onChange= {(e) => setPassword(e.target.value)} id="examplePassword" placeholder="Password" />
                    </FormGroup>
                    </Col>  
                    
                <Col md={8}>
                    <FormGroup  className="">
                        <Label for="exampleFullname" >Fullname</Label>
                        <Input type="text" name="fullname"  value={fullName} onChange={(e) => setFullName(e.target.value)} id="exampleFullname" placeholder="Fullname"   />
                    </FormGroup>
                    </Col>  

                     
                <Col md={8}>
                    <FormGroup  className="">
                        <Label for="exampleContact" >Contact No</Label>
                        <Input type="number" name="contact" value={contact} onChange={(e) => setContact(e.target.value)}  id="exampleContact" placeholder="Contact No"  />
                    </FormGroup>
                    </Col> 

                    <FormGroup>
                            <Label for="exampleFile">Profile Image</Label>
                            <Input type="file" onChange = {handleFile} name="file" id="exampleFile" />
                            <FormText color="muted">
                                Select Your profile Image for your acccount
                            </FormText>
                        </FormGroup>
                    <Button color="secondary" size="lg" active type="submit" >Sign Up</Button>{' '}
                    </Form>


               </div>

           </div>
        </React.Fragment>
    )
}


export default SignUp
