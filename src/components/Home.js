import React,{useState} from 'react';
import Navbar from "./Navbar";
import "./Home.css";
import Sidebar from './Sidebar';

function Home() {

    const { innerWidth: width, innerHeight: height } = window;

    

    
    

    
    return (

        <div>

        
        <div className="Home" style={{height:height}} >
             
             
             <Navbar  />
             
             
             <div className="sidebarView">

             <div id="home__sidebar"><Sidebar /></div>

             </div>
             
             <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                 <h1 style={{marginTop:20}}>Roadster</h1>
             </div>

           
           {/* <img src="https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/11/Tesla-Roadster-103.jpg" style={{width:"100%",height:"100%",objectFit:"contain",overflow:"hidden"}} alt="" /> */}
        </div>
        <h1>test</h1>
        </div>
    )
}

export default Home
