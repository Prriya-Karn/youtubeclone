import React, { Fragment } from "react";
import CardChannel from "./CardChannel";
import { ThapaTechnical } from "./ApnaDataBase";
import IFrame from "./IFrame";
const Downloads = ()=>{
    return(
       <Fragment>
       <div className="d-flex container-fluid chan-card">
       <div className="row">
    
                <div className="inner-card-chain col-lg-4 col-md-12">
          <IFrame
          link = {ThapaTechnical[0].link}
          />
              <div className="content-chan-1">
              <p className="chantit">{ThapaTechnical[0].channeltit.length>=10
                  ?
                  ThapaTechnical[0].channeltit.slice(0,100)+"...":""}</p>
              <p className="namechan">{ThapaTechnical[0].chanName}</p>
              <p className="viewchan">{ThapaTechnical[0].chanView}</p>
              </div>
              </div> 
                
       </div>
       </div>
       </Fragment>
    )
}

export default Downloads;