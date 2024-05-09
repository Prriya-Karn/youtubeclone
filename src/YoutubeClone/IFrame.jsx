import React, { Fragment, useContext, useEffect, useState } from "react";
import YoutubeData from "./ApnaDataBase";

const IFrame = (props) => {
    
    
    return(
<>

        <iframe width="560" className="m-5"
        height="315"
        src={props.link}
        title="YouTube video player"
        >
    </iframe>

    </>

    
    

    )
}

export default IFrame;




