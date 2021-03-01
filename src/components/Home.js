import React from 'react'
import Sidebar from './Sidebar'
import Feed  from './Feed'
import Widgets from './Widgets'
const Home = props => {
    return (
        <>


            <Sidebar />

            {/* Feed */}

            <Feed />


            {/* Widgets */}
            
            <Widgets />
        </>
    )
}



export default Home
