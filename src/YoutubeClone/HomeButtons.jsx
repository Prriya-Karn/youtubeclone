import React, { Fragment } from "react";
import YoutubeData from "./ApnaDataBase";
const HomeButtons = ({ HomeFun,all }) => {
    return (
        <>
            <div className="homebutt">
            <button className="btn" onClick={all}>All</button>
                {
                    YoutubeData.map((e) => {
                        return (
                            <Fragment>
                                <button className="btn" onClick={() => HomeFun(e.name)}>{e.name}</button>
                            </Fragment> 
                        )
                    })
                }
            </div>
        </>
    )
}

export default HomeButtons;