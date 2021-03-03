import React from 'react'
import TweetBox from './TweetBox'
import Post from './Post'

const Feed = props => {
    return (
        <div className="feed"> 

            <div className="feed_header">
            <h2>Home</h2>
            </div>

              <TweetBox />
            
                {/* Post  */}    

                <Post />        
                <Post />    
                <Post />    
                <Post />    
                <Post />    

                <Post />    
                <Post />    
                <Post />    
                <Post />    


        </div>


    )
}



export default Feed
