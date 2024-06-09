import React, { Fragment, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ThapaTechnical, mysirg } from "./ApnaDataBase";
const CardChannel = ()=>{
    const navigate = useNavigate()
    const [channel, setchannel] = useState([]);
    const { name } = useParams(); // Ensure 'name' matches the route definition


    const chanFun = (channelID,name) => {
        
        const filterchan = name==="thapatechnical"?ThapaTechnical.find((e) =>e.IDData === channelID):name==="mysirg"?mysirg.find((e)=>e.IDData===channelID):""
        setchannel(filterchan)
        navigate(`/chandata/${channelID}/${name}`)
 }

    return(
        <Fragment>
        

        <div className="d-flex container-fluid chan-card">
        <div className="row">
          {

              name==="thapatechnical"?
              ThapaTechnical.map((e)=>
                  <Fragment>
              <div className="inner-card-chain col-lg-4 col-md-12">
              <img src={e.channelData} 
              onClick={() => chanFun(e.IDData,e.channelName)} />
              <div className="content-chan-1">
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
              <div className="content-chan-1">
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
              ""
          }
          </div>
       
          </div>
       
        </Fragment>
    )
}

export default CardChannel;