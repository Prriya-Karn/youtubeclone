import React, { Fragment } from "react";
import YoutubeClone from "./YoutubeClone/YoutubeClone";
import { Route, Router, Routes } from "react-router-dom";
import List from "./YoutubeClone/List";
import IFrame from "./YoutubeClone/IFrame";
import Chan from "./YoutubeClone/Chan";
import Video, { images } from "./YoutubeClone/Video";
import YoutubeDetail from "./YoutubeClone/YoutubeDetail";
import YoutubeData from "./YoutubeClone/ApnaDataBase";
import ChannelPage from "./YoutubeClone/ChannelPage";
import ChannelData from "./YoutubeClone/ChannelData";
import TexttoSpeech from "./YoutubeClone/TextToSpeech";
import Downloads from "./YoutubeClone/Downloads";


const App = () => {
  return (
    <Fragment>
    
      <Routes>
        <Route exact path="/:name" element={<YoutubeClone />} />
        <Route exact path="/" element={<YoutubeClone />} />
        <Route exact path="/Downloads/:id/:name" element={<Downloads />} />
        <Route exact path = "/videos" element = {<IFrame/>}/>
        <Route exact path = "/chan" element = {<Chan/>}/>
        <Route exact path = "/video"  element = {<Video/>}/>
        <Route path="/image/:id" 
        element={<YoutubeDetail youtubedata = {YoutubeData} />} />
        <Route exact path = "/channelpage/:name"  element = {<ChannelPage/>}/>
        <Route exact path = "/chandata/:ID/:name" element={<ChannelData/>}/>
     
        <Route exact path = "/mic" element= {<TexttoSpeech/>}/>
      </Routes>
  

    </Fragment>
  )
}

export default App;