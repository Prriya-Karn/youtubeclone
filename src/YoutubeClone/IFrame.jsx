import React, { Fragment, useContext, useEffect, useState } from "react";
import YoutubeData from "./ApnaDataBase";

const IFrame = (props) => {
    
    
    return(
<>

        <iframe className="m-5"
        src={props.link}
        title="YouTube video player"
        >
    </iframe>

    </>

    
    

    )
}

export default IFrame;




