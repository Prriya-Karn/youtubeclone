import React, { Fragment, useContext, useEffect, useState } from "react";
import YoutubeData from "./ApnaDataBase";

const IFrame = (props) => {
    
    
    return(
<>

        <iframe className="m-5" style={{width:"50rem",height:"30rem",borderRadius:"1rem"}}
        src={props.link}
        title="YouTube video player"
        >
    </iframe>

    </>

    
    

    )
}

export default IFrame;




