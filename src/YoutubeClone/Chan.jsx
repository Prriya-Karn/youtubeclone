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
                <Fragment>

                <div className="iframe-chan d-flex">

                <iframe className="m-5 chan-iframe"
                 src={e.link}
                 title="YouTube video player"
                 >
             </iframe>
              
                 <div className="chan-descr">
                 <h5>{e.tit}</h5>
                 <p>{e.views}</p>
                
                 <div className="d-flex chan-logo-1" onClick={props.clickImage}>
                 <img src={e.logo}/>
                 <p>{e.channelName}</p>
             </div>
             <p className="desc">{e.description}</p>
             <p className="tag">{e.tag}</p>
                 </div>
                    

                     </div>
                 </Fragment>


                               </>
            )
        })
     }   
       

    
    </Fragment>
    )   
    }

export default Chan;