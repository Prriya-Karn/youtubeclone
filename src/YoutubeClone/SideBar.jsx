import React, { Fragment, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
const sideBarData = [
    {
        img:"/Images/home.png",
        name:"Home",
        backgroundColor:"#343333",
    },
    {
        img:"/Images/shorts.png",
        name : "Shorts"
    },
    {
        img:"/Images/subscription.png",
        name:"Subscriptions"
    },
    {
        img:"/Images/download.png",
        name:"Downloads"
    },
    {
        img:"/Images/like.png",
        name:"Liked Videos"
    },
    {
        img:"/Images/watchlater.png",
        name:"Watch Later"
    },
    {
        img:"/Images/history.png",
        name:"History"
    },
    {
        img:"/Images/playlist.png",
        name:"Playlists"
    },
    
    

]
const SideBar = ()=>{
    const navigate = useNavigate();
    const data = useParams()
    const sideButton = (name)=>{
  
      navigate(`/${name}`)
    }
    console.log(data)
    return(
        <Fragment>
   <div className="innersidebar d-flex">
   <img className="ham" src="/Images/hamburger.png"/>
   <img className="youLogo" src="/Images/youtubelogo.png"/>
   </div>
  
   {
    sideBarData.map((e)=>{
        return(
            <Fragment>
            <div className="onefirst d-flex" 
            style={{backgroundColor:`${e.backgroundColor}`}} >
            <img className="home"
            src={e.img}/>
        
          <button className="btn"
          onClick={()=>sideButton(e.name)}
          style={{color:"white",border:"none"}}>
          {e.name}</button>
   
           


            </div>
            </Fragment>
        )
    })
   }
   
   
   
        </Fragment>
    )
}

export default SideBar;