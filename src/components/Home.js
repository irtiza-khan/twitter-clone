import React from 'react'
import Sidebar from './Sidebar'
import Feed  from './Feed'
import Widgets from './Widgets'
import {useEffect ,useState} from 'react'
const Home = ({auth,database,storage}) => {
    const[userId, setUser] = useState();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
              var uid = user.uid;
              setUser(uid);

            } else {
               console.log('User Not logged in');
            }
          });
    },[])

    
    return (
        <>


            <Sidebar />

            {/* Feed */}

            <Feed  userId={userId}  database={database}  storage={storage}/>


            {/* Widgets */}
            
            <Widgets />
        </>
    )
}



export default Home
