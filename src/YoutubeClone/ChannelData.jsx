import React, { useState } from "react";
import { useParams } from "react-router-dom";
import YoutubeData from "./ApnaDataBase";
import IFrame from "./IFrame";

const ChannelData = ()=>{
    const {id} = useParams()
    console.log(typeof(id))
    const filterChanData = YoutubeData.find((e)=>{
        return e.id === parseInt(id);
    })
    console.log(filterChanData)

    return(
        <>
        <img src={filterChanData.channelData}/>
        <IFrame
        link = {filterChanData.channelIfram}
        />
        </>
    )
}

export default ChannelData;