
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"; //due to this all bootstrap 5 components working 
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(

  <BrowserRouter>
    <App />
  </BrowserRouter>,


  document.getElementById('root')
)




