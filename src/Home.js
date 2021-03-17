import React from 'react';
import "./Home.css"
import Navbar from "./Components/Navbar"
import Siderbar from './Components/Siderbar';

function Home() {
    return (
        <div className="home">
            <Navbar />

            <div className="homeSideBar">
               {/* <Siderbar /> */}
            </div>
            
            <div className="header">
              <p>Roadster</p>
            </div>
        </div>
    )
}

export default Home
