import React, { Fragment } from "react";
import { ThapaTechnical, mysirg } from "./ApnaDataBase";
const options = (ThapaTechnical).map((e) => {
    return e.options;
}) || mysirg.map((e) => {
    return e.options;
})

// console.log(options)
const Chanoptions = [...new Set(options)]
// console.log(`Chanoptions is ${Chanoptions}`)
const TabButtons = ({ tab }) => {
    return (
        <>
            <div className="homebutt chanbutt">
                {
                    (Chanoptions).map((e) => {

                        return (
                            <Fragment>
                                <button className="btn"
                                    onClick={() => tab(e)}>
                                    {e}</button>
                            </Fragment>
                        )
                    })
                }
            </div>


        </>
    )
}

export default TabButtons;