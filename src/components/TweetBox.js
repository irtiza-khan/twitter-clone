import React from 'react'
import { Button, Form, FormGroup, Input ,Label } from 'reactstrap'
import { Avatar } from '@material-ui/core';
import {useState} from 'react'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ImageIcon from '@material-ui/icons/Image';
import firebase from 'firebase/app'; 
import 'firebase/database';

const TweetBox = ({ imageUrl, id , database , storage}) => {
     //*States
     const[tweet,setTweet] =  useState('');
     const[like ,setLike] = useState(0);
     const [profile, setProfile] =  useState(null)
 
       const handleFile =  (e) => {
        if(e.target.files[0]){
            setProfile(e.target.files[0]);
        }
    }

    const handleLike = (e) => {
        e.target.style.color = "red";
            setLike( like + 1 );
    }


    const handleSubmit = (e) => {
        e.preventDefault();  
        if(id){
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
                        var postListRef = database.ref( 'tweets');
                        var newPostRef = postListRef.push();
                        newPostRef.set({
                            tweet,
                            tweet_image:link,
                            id,
                            like,
                            timestamp: firebase.database.ServerValue.TIMESTAMP 

                        });
                        console.log('Data saved into database');
                        setTweet('');
                        setLike(false);
                        setProfile(null);
                                
                        })
                

                })

            }else{
                ///user logged out
            }
        
    }

    return (

        <div className="tweetBox">
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <div className="tweetBox__input">
                    <Avatar src= {imageUrl}/>
                    <Input placeholder="What's happening?" value={tweet} onChange={(e) => setTweet(e.target.value)}  type="text"/>
                    </div> 
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="upload-photo">
                    <input  style={{ display: 'none' }} 
                    id="upload-photo"  
                    name="upload-photo"  
                    type="file"
                    onChange={handleFile}
                    /> 
                        <ImageIcon fontSize="large" className="tweetBox__imageIcon"/>
                    </Label>

                </FormGroup>
               <FavoriteBorderIcon fontSize="large" className="tweetBox__likeIcon"  onClick={handleLike} />

                <Button className="tweetBox__btn" type='submit' >Tweet</Button>
            </Form>

        </div>
    )
}


export default TweetBox;
