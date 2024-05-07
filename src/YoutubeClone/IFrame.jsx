import React, { Fragment, useContext, useEffect, useState } from "react";
import YoutubeData from "./ApnaDataBase";

const IFrame = (props) => {
    
    
    return(
<>
<a href="" target="_blank">
        <iframe width="560" className="m-5"
        height="315"
        src={props.link}
        title="YouTube video player"
        Frameborder="0" allow="autoplay; encrypted-media
   clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
    </iframe>
    </a>
    </>

    
    

    )
}

export default IFrame;




