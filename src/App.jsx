import React, { Fragment } from "react";
import YoutubeClone from "./YoutubeClone/YoutubeClone";
import { Route, Router, Routes } from "react-router-dom";
import List from "./YoutubeClone/List";
import IFrame from "./YoutubeClone/IFrame";
import Chan from "./YoutubeClone/Chan";
const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<YoutubeClone />} />
        <Route exact path="/list" element={<List />} />
        <Route exact path = "/videos" element = {<IFrame/>}/>
        <Route exact path = "/chan" element = {<Chan/>}/>
      </Routes>
    </Fragment>
  )
}

export default App;