import React, { Fragment } from "react";
import { ThapaTechnical, mysirg } from "./ApnaDataBase";
const options = (ThapaTechnical||mysirg).map((e)=>{
    return e.options;
})
const Chanoptions = [...new Set(options)]
console.log(Chanoptions)
const TabButtons = ({tab})=>{
    return(
        <>
        <div className="homebutt chanbutt">
            {
                (Chanoptions).map((e)=>{
                    console.log(e)
                    return(
                        <Fragment>
                        <button className="btn" onClick={() => tab(e)}>{e}</button>
                        </Fragment>
                    )
                    })
                
            
            
            }
            </div>
       
    
        </>
    )
}

export default TabButtons;