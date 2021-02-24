import React from 'react'
import { Button, Form, FormGroup, Label, Input,Col, FormText } from 'reactstrap';
import { useState } from 'react';


const SignUp = ({auth, database , storage})=> {
    const [email,setEmail] = useState('') 
    const [password, setPassword] = useState('')  
    const [name, setName] = useState('');
    const [fullName , setFullName] = useState('')
    const [contact, setContact] = useState('');
    const [profile, setProfile] =  useState(null)
    const[url , setUrl] =  useState("")



    //Setting file state 
    const handleFile =  (e) => {
        if(e.target.files[0]){
            setProfile(e.target.files[0]);
        }
    }

    
    const handleSubmit = async (e) => {
        e.preventDefault();

          const storageRef =  storage.ref(`images/${profile.name}`);
          const uploadTask =  storageRef.put(profile);

          uploadTask.on("state_changed", 
           snapshot => {},
           error => {
               console.log(error.message)
           },
           () => {
             storage.ref('images').child(profile.name).getDownloadURL()
                .then(link => {
                     setUrl(link);
        

                })
           }
         );


       

         if(url !== null){
             console.log(url);
             await addUsers();
         }else{
             console.log('url is empty ');
         }

    } 

  
const addUsers = async() => {
    auth.createUserWithEmailAndPassword(email, password)
    .then((cred) => {
        // Signed in 
        database.ref('users/' + cred.user.uid).set({
            email,
            username:name,
            fullName,
            contact,
            imageUrl:url
        })

        
    }).then(() => {
        console.log('Data saved to database');
    })
    .catch((error) => {
        console.log(error.message);

    });
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
                        <Input type="email" name="email" value= {email} onChange={(e) => setEmail(e.target.value)}   id="exampleEmail" placeholder="with a placeholder" />
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
