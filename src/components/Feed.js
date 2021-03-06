import React from 'react'
import TweetBox from './TweetBox'
import Post from './Post'
import {useEffect ,useState} from 'react'

const Feed = ({userId , database}) => {
    const [userData,setUserData] = useState([]);
    
    useEffect(() => {
      //?Firebase retrieving data successfully 
        database.ref('users/' + userId).on('value', (snapshot) => {
        let userList = [];
         snapshot.forEach((snap) => {
             userList.push(snap.val())
         });
        
          setUserData(userList[3])
        });
        
    },[])




    return (
        <div className="feed"> 

            <div className="feed_header">
            <h2>Home</h2>
            </div>

              <TweetBox imageUrl={userData}  id={userId}  database={database}/>
            
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
