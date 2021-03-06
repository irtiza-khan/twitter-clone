import React from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap'
import { Avatar } from '@material-ui/core';
import {useEffect ,useState} from 'react'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
const TweetBox = ({ imageUrl, id , database}) => {
     //*States
     const[tweet,setTweet] =  useState('');
     const[image,setImage] = useState('');
     const[like ,setLike] = useState(false);
     const date =  new Date().toUTCString();
      
    //TODO: Need to change like logic need to set like as a count 
    const handleLike = (e) => {
        e.target.style.color = "red";
            setLike(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!tweet || !image){
            alert('field empty cannont tweet');
        }else{
            var postListRef = database.ref('tweet');
            var newPostRef = postListRef.push();
            newPostRef.set({
                 tweet,
                 image,
                 id,
                 like,
                 date

            });
            
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
                    <Input className="tweetBox__imageInput" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Optional: Enter image URL" type="text" />
                </FormGroup>
               <FavoriteBorderIcon fontSize="medium" className="tweetBox__likeIcon"  onClick={handleLike} />

                <Button className="tweetBox__btn" type='submit' >Tweet</Button>
            </Form>

        </div>
    )
}


export default TweetBox;
