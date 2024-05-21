import React, { Fragment, useEffect, useState } from "react";
import YoutubeData, { ThapaTechnical, mysirg } from "./ApnaDataBase";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { click } from "@testing-library/user-event/dist/click";
import Search from "./Search";
import Subscribe from "./Subscribe";
const subImg = [
    {
        img: "/Images/all.png",
        name: "All",
        id: 1
    },
    {
        img: "/Images/person.png",
        name: "Personalize",
        id: 2
    },
    {
        img: "/Images/none.png",
        name: "None",
        id: 3
    },
    {
        img: "/Images/unsub.png",
        name: "Unsubscribe",
        id: 4
    }
]
const ChannelPage = () => {
    const navigate = useNavigate()
    const [channel, setchannel] = useState([]);
    const { name } = useParams(); // Ensure 'name' matches the route definition


    const chanFun = (channelID,name) => {
        
        const filterchan = name==="thapatechnical"?ThapaTechnical.find((e) =>e.IDData === channelID):name==="mysirg"?mysirg.find((e)=>e.IDData===channelID):""
        setchannel(filterchan)
        navigate(`/chandata/${channelID}/${name}`)
 }

   
    return (
        <>
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


          <div className="d-flex container-fluid chan-card">
          <div className="row">
            {

                name==="thapatechnical"?
                ThapaTechnical.map((e)=>
                    <Fragment>
                <div className="inner-card-chain col-lg-4 col-md-12">
                <img src={e.channelData} 
                onClick={() => chanFun(e.IDData,e.channelName)} />
                <div className="content-chan">
                <p className="chantit">{e.channeltit.length>=10
                    ?
                    e.channeltit.slice(0,40)+"...":""}</p>
                <p className="namechan">{e.chanName}</p>
                <p className="viewchan">{e.chanView}</p>
                </div>
                </div>  
                </Fragment>
               
                    
            )
            
            :
                name === "mysirg"?mysirg.map((e)=>
                <Fragment>
                <div className="inner-card-chain col-lg-4 col-md-12">
                <img src={e.channelData} 
                onClick={() => chanFun(e.IDData,e.channelName)} />
                <div className="content-chan">
                <p className="chantit">{e.channeltit.length>=100
                    ?
                    e.channeltit.slice(0,40)+"...":""}</p>
                <p className="namechan">{e.chanName}</p>
                <p className="viewchan">{e.chanView}</p>
                </div>
                </div>  
                
                </Fragment>    
                
                
                )
                :
                ""
            }
            </div>
         
            </div>
        </>
    )
}

export default ChannelPage;

