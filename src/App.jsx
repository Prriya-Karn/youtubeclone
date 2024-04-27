import React, { Fragment } from "react";
import YoutubeClone from "./YoutubeClone/YoutubeClone";
import { Route, Router, Routes } from "react-router-dom";
import List from "./YoutubeClone/List";
const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/youtube" element={<YoutubeClone />} />
        <Route exact path="/list" element={<List />} />
      </Routes>
    </Fragment>
  )
}

export default App;