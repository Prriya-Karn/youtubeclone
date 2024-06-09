import React, { Fragment, useEffect, useState } from "react";
import YoutubeData, { ThapaTechnical, mysirg } from "./ApnaDataBase";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { click } from "@testing-library/user-event/dist/click";
import Search from "./Search";
import Subscribe from "./Subscribe";
import SideBar from "./SideBar";
import CardChannel from "./CardChannel";
// const subImg = [
//     {
//         img: "/Images/all.png",
//         name: "All",
//         id: 1
//     },
//     {
//         img: "/Images/person.png",
//         name: "Personalize",
//         id: 2
//     },
//     {
//         img: "/Images/none.png",
//         name: "None",
//         id: 3
//     },
//     {
//         img: "/Images/unsub.png",
//         name: "Unsubscribe",
//         id: 4
//     }
// ]
const ChannelPage = () => {

    const { name } = useParams(); // Ensure 'name' matches the route definition


   
    return (
        <>
        <div className="main-home d-flex">
        <div className="sidebar">
        <SideBar/>
        <Search/>
      
    {
        name==="thapatechnical"?<Fragment>
        <div className="headImageChan">
        <img src="/Images/channelPageImage.png"/>
        </div>
        
        <div className="channelLogo d-flex">
        <NavLink exact to="/channel">
        <img src="/Images/thapalogo.png" />
        </NavLink>

        <div className="channelName">
    <h1>Thapa Technical</h1>
    <p>@ThapaTechnical ‧ 6.64 lakh subscribers ‧ 1.9K videos</p>
    <p>Welcome Guys, This channel is all about Website Development, Technical, Tips and Tricks,</p>
    <p> <NavLink className="navlink" exact to="https://thapatechnical.shop/" target="_blank">thapatechnical.shop </NavLink>
    and 3 more links</p>
    </div>

        </div>

    
        </Fragment>
     
       :name==="mysirg"?<Fragment>
       <div className="headImageChan">
       <img src="/Images/channelPageImageMysirg.png"/>
       </div>
    
       

       <div className="channelLogo d-flex">
       <NavLink exact to="/channel">
       <img src="/Images/mysirgLogo.png" />
       </NavLink>

       <div className="channelName">
   <h1>MySirG</h1>
   <p>@MySirG ‧ 8.73 lakh subscribers ‧ 1.6K videos</p>
   <p>This channel is all about learning programming languages, Career Guidance and Motivation</p>
     <p> <NavLink className="navlink" exact to="https://thapatechnical.shop/" target="_blank">thapatechnical.shop </NavLink>
   and 3 more links</p>
   </div>

       </div>

       </Fragment>
         :""
    }
            <Subscribe
           

            />
          
<div className="chanTabs">
<button className="btn">Home</button>
<button className="btn">Videos</button>
<button className="btn">Live</button>
<button className="btn">Community</button>
</div>

<CardChannel/>
            </div>
            </div>
        </>
    )
}

export default ChannelPage;

