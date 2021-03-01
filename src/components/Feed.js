import React from 'react'
import TweetBox from './TweetBox'

const Feed = props => {
    return (
        <div className="feed"> 

            <div className="feed_header">

            <h2>Home</h2>
            </div>
            
           {/*Tweet Box */}

              <TweetBox />
        </div>
    )
}



export default Feed
