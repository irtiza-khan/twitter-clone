import React from 'react'
import TweetBox from './TweetBox'
import Post from './Post'
import {useEffect ,useState} from 'react'

const Feed = ({userId , database, storage}) => {
    const [userData,setUserData] = useState('');
     
    //TODO: Need to fetch data from firebase only once
    useEffect(() => {
      //?Firebase retrieving data successfully 
        // database.ref('users/' + userId).on('value', (snapshot) => {
        let userList = [];
        //  snapshot.forEach((snap) => {
        //      userList.push(snap.val())
        //  });
        
        //   setUserData(userList[3])
        // });

       const userRef =  database.ref('users/' + userId).once('value').then((snapshot) => {
            const userInfo =  snapshot.val();
            const{imageUrl} =  userInfo;
            console.log(imageUrl);
            setUserData(imageUrl)
            ///TODO: need to check why update the componet useEffect hook gives null value ;
        });
  
    },[])

    



    return (
        <div className="feed"> 

            <div className="feed_header">
            <h2>Home</h2>
            </div>

              <TweetBox imageUrl={userData}  id={userId}  database={database}  storage={storage}/>
            
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
