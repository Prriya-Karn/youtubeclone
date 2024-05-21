import React, { Fragment } from "react";
import { ThapaTechnical, mysirg } from "./ApnaDataBase";
const Logo = [
    {
        channelName:"Thapa Technical",
        logo : "/Images/thapalogo.png"
    },
    {
        channelName:"MysirG",
        logo : "/Images/mysirgLogo.png"
    }
]

const LogoContent = ({clickImage,search})=>{
    return(

        ((ThapaTechnical).map((e) => e.channelName).includes(search) === true)?
                           
        <Fragment>
        <div className="LogoContent d-flex" onClick={clickImage}>
   
        <img src={Logo[0].logo} />
        
        
        <p>{Logo[0].channelName}</p>
    </div>
        </Fragment>:
        ((mysirg).map((e) => e.channelName).includes(search) === true)?
        <Fragment>
        <div className="LogoContent d-flex" onClick={clickImage}>
        <img src={Logo[1].logo}/>
        <p>{Logo[1].channelName}</p>
    </div>
        </Fragment>:""          
    )
}

export default LogoContent;
