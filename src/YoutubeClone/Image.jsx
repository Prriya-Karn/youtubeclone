import React, { useState } from "react";
import YoutubeData from "./ApnaDataBase";
import { NavLink } from "react-router-dom";
const Image = ({fun,click})=>{

    const [imgData,setImg] = useState(click)
    console.log(imgData)
    return(
        <>
        
                return(
                    <>
                    {
                        imgData.map((e)=>{
                            return(
                                <>
                                <NavLink exact to="/video">
                                <img src={e} onClick={() => fun("javaScript")}/>
                                </NavLink>
                                
                                </>
                            )
                        })
                    }
                 
                    </>
                )
            
      
        </>
    )
}

export default Image

