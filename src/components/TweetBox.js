import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Avatar } from '@material-ui/core';

const TweetBox = props => {
    //TODO: Need to pass user image url as a prop 
    return (

        <div className="tweetBox">
            <Form>
                <FormGroup>
                    <div className="tweetBox__input">
                    <Avatar src="" />
                    <Input placeholder="What's happening?"  type="text"/>
                    </div> 
                </FormGroup>

                <FormGroup>
                    <Input className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text" />
                </FormGroup>

                <Button className="tweetBox__btn">Tweet</Button>
            </Form>

           

            
        </div>
    )
}


export default TweetBox;
