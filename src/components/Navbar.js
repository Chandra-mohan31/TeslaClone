import React,{useState} from 'react';
import "./Navbar.css";
import MenuIcon from '@material-ui/icons/Menu';
import {toggle} from "../utils/sidebar";
import Sidebar from './Sidebar';
import CloseIcon from '@material-ui/icons/Close';



function Navbar() {

    const [showSidebar,setShowSidebar] = useState(false);
    const [showmenu,setShowmenu] = useState(true);
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
        setShowmenu(!showmenu)
    }

    const LeftMenu = () => {
        return(
            <div className="leftMenu">
                <img src="https://d1ly52g9wjvbd2.cloudfront.net/post/94c2c3021c6d6623a2eb0a42773d81ac_08ed8c07733b28ae0a2abdca21042d88.jpg" alt="" />
            </div>
        )
    }

    const RightMenu = () => {

        

        return(
            <div >
                <ul className="RightMenu">
                    <li><a href="#" ><h3>Shop</h3></a></li>
                    <li><a href="#" ><h3>Tesla Account</h3></a></li>
                    {showmenu ? (<li><a href="#" ><div onClick={toggleSidebar}><MenuIcon  /></div></a></li>):(<li><a href="#" ><div onClick={toggleSidebar}><CloseIcon  /></div></a></li>)}

                </ul>
            </div>
        )
    }

    const CenterMenu = () => {
        return(
            <ul className="CenterMenu">
                <li>
                    <a href="#" style={{textDecoration:"none"}}>
                        <h3>Model S</h3>
                        

                    </a>
                </li>
                <li>
                    <a href="#" style={{textDecoration:"none"}}>
                        <h3>Model 3</h3>
                        

                    </a>
                </li>
                <li>
                    <a href="#" style={{textDecoration:"none"}}>
                    <h3>Model X</h3>
                        

                    </a>
                </li>
                <li>
                    <a href="#" style={{textDecoration:"none"}}>
                    <h3>Model Y</h3>
                        

                    </a>
                </li>
                <li>
                    <a href="#" style={{textDecoration:"none"}}>
                    <h3>Solar Roof</h3>
                        

                    </a>
                </li>
                <li>
                    <a href="#" style={{textDecoration:"none"}}>
                    <h3>Solar Panel</h3>

                    </a>
                </li>
            </ul>
        )

        function Sidebar() {
            return (
                <div className="sideBar">
                    <h4>Model S</h4>
                    <h4>Model S</h4>
                    <h4>Model S</h4>
                    <h4>Model S</h4>
        
                    
                </div>
            )
        }
    }
    return (
        <div>
        <div className="Navbar">
            <LeftMenu />
            <CenterMenu />
            <RightMenu />
        </div>
        {showSidebar && <div className="sidebarView">

<div id="home__sidebar"><Sidebar /></div>

</div>}
        </div>
    )
}

export default Navbar
