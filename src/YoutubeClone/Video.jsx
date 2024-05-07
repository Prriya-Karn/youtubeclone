import React, { Fragment, useState } from "react";
import IFrame from "./IFrame";
import YoutubeData from "./ApnaDataBase";
const Video = ({vi})=>{
    const [data,updateData] = useState(vi);
//     if (!vi || vi.length === 0) {
//         // If vi is undefined or empty, display a message or handle the case accordingly
//         return <p>No video data available</p>;
//     }
//    console.log(vi)
    return(
        <>
        <h1>hi</h1>
        {
            data?.map((e)=>{
                console.log(e.name)
                return(
                    <>

                    <IFrame
                    link = {e.videoLink.link1}
                    />

                    </>
                )
            })
        }
       </>
    )
}

export default Video;