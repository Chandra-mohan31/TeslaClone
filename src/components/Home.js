import React,{useState} from 'react';
import Navbar from "./Navbar";
import "./Home.css";
import Sidebar from './Sidebar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



function Home() {

    const { innerWidth: width, innerHeight: height } = window;

    

    
    const scrollToPos = (pos) => {
        console.log(pos);
        window.scrollTo(0, pos);
        
    }
    
    

    
    return (

        <div>

        
        <div className="Home" style={{height:height}} >
             
             
             <Navbar   />
             
             
             
             {/* <div className="sidebarView">

             <div id="home__sidebar"><Sidebar /></div>

             </div> */}
             
             <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                
                 <h1 style={{marginTop:20}}>Roadster</h1>
                 <div style={{marginBottom:0}} className="home__desc">

                    <p style={{marginBottom:0}}>The quickest car in the world ,with record-setting acceleration,range and performance</p>

                 </div>

                 <ExpandMoreIcon onClick={()=>{scrollToPos(500)}} style={{color:"white",fontSize:50,position:"fixed",top:580}} />
             </div>

           
           {/* <img src="https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/11/Tesla-Roadster-103.jpg" style={{width:"100%",height:"100%",objectFit:"contain",overflow:"hidden"}} alt="" /> */}
        </div>

        <div id="heythere">
            <h1>hey</h1>
        </div>
        
        </div>
    )
}

export default Home
