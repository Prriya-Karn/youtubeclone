import React, { Fragment } from "react";
import IFrame from "./IFrame";
import YoutubeData, { ThapaTechnical } from "./ApnaDataBase";
const Chan = (props)=>{
    
    return(
    <Fragment>
    
    
    {
        props.click.map((e)=>{
            return(
                <>
                <h1>{e.channelName}</h1>
                <IFrame link= {e.link}/>
                <h5>{e.title}</h5>
                <p>{e.views}</p>
                </>
            )
        })
     }   
       

    
    </Fragment>
    )   
    }

export default Chan;