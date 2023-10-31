import React from 'react'
import { BiSearch } from "react-icons/bi"
import img from "./images/boy1.jpg"
import {FaFilter} from "react-icons/fa"
const Header = () => {
    return (
        <div className='Header' style={{backgroundColor:'white',height:"150px"}}>
            <nav className="navbar1 navbar-expand-lg ">
                <ul style={{
                    listStyleType:'none',
                    position:'fixed',
                    alignItems:'flex-start'
                }}>
                <li>
                    <h3 
                    style={{display:"flex",paddingTop:"20px",paddingBottom:"20px",color:"black",fontWeight:"bold", alignItems:'flex-start',marginRight:"-20px",fontSize:"large", fontStyle:"normal",fontFamily:"Segoe UI"}}>
                    Lorem ipsum dolar
                </h3>
                </li>
                <li> 
                    <div className="d-flex" style={{flex:"1",padding:"0px",margin:"0px"}}>
                       <button className='searchbtn' style={{}}><BiSearch type="search-icon"  /></button> 
                        <input class="form" type="search" placeholder="Search" style={{}}/>
                    <button className='btn btn-primary ml-3 mr-3'>
                        Filter<FaFilter/>
                    </button>
                </div></li>
            </ul>
            <ul style={{listStyleType:"none",position:"fixed"}}>
                <li className='d-flex'>
               <div  className='namerighttop'> <h6 >Rajpillai</h6>
                <h6>chennai,india</h6></div>
                        <img className='buttonrighttop' src={img} style={{width:"50px",height:"50px",borderRadius:"50%",boxShadow: "4px 0px 6px 0px #888888"}}/>
        
                </li>
            </ul>


        </nav >
        </div >
    )
}

export default Header