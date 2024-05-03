import React, { Fragment, useContext, useEffect } from "react";
import YoutubeData from "./ApnaDataBase";

const IFrame = (props) => {
    return(
<>
<a href="" target="_blank">
        <iframe width="560" className="m-5"
        height="315"
        src={props.link}
        title="YouTube video player"
        Frameborder="0" allow="accelerometer;
    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
    </iframe>
    </a>
    </>

    
    

    )
}

export default IFrame;




