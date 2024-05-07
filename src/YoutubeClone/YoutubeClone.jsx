import React, { Fragment, createContext, useEffect, useState } from "react";
import YoutubeData, { ThapaTechnical, mysirg } from "./ApnaDataBase";
import { NavLink } from "react-router-dom";
import IFrame from "./IFrame";
import Chan from "./Chan";
import { filter } from "lodash";
import Video from "./Video";
import Image from "./Image";

const iframe = createContext();
var filterchannel;
var filterchannel2;
const YoutubeClone = () => {
   


    const [click, setClick] = useState(YoutubeData);
    const [search, setSearch] = useState();
    const [searchData, setSearData] = useState([]);
    const [vi,setvi] = useState([]);

    const videoFun = (data) => {
        const filtervi = YoutubeData.filter((e) => (e.name).toLowerCase() === data.toLowerCase());
        setvi(filtervi); 
    };
    console.log(vi)
  
    const funexpr = (data) => {
        const filterData = YoutubeData.filter((e) => {
            return (e.name).toUpperCase() === data.toUpperCase();
        })
        if (data === "mixes") {
            setClick(YoutubeData);
        }
        else {
            setClick(filterData)
        }

    }

    const searchText = (event) => {
        const value = event.target.value;
        setSearch(value);
    }

    const submitText = (s) => {
        if (s.trim() === "") {
            setClick(click)
        }
        else {
            const filterSearchData = YoutubeData.filter((e) => {
                return e.name.toUpperCase() === s.toUpperCase();
            })

            setClick(filterSearchData)
            console.log(searchData)
        }

        filterchannel = ThapaTechnical.filter((e) => {
            return e.channelName.toUpperCase() === s.toUpperCase()
        })
        if (ThapaTechnical.map((e) => e.channelName).includes(search) === true) {
            (setClick(filterchannel))
            console.log(filterchannel)
            // console.log(true)
        } else {
            // console.log(false)
        }

        filterchannel2 = mysirg.filter((e) => {
            return e.channelName.toUpperCase() === s.toUpperCase()
        })
        if (mysirg.map((e) => e.channelName).includes(search) === true) {
            (setClick(filterchannel2))
            // console.log(filterchannel2)
            // console.log(true)
        } else {
            // console.log(false)
        }
    }

    const tab = (s) => {

        var filterTab = ThapaTechnical.filter((e) => {
            return e.options === s;
        })

        if (ThapaTechnical.map((e) => e.options).includes(s) === true) {
            (setClick(filterTab))

            // console.log(filterTab)
            // console.log(true)
        }

        if (s === "All") {

            setClick(filterchannel)
        }
    }

    


    // console.log(videos)
    
   

    


    return (
        <Fragment>

            <input type="text" className="m-2"
                onChange={searchText}
                placeholder="search" />

            {
                (ThapaTechnical.map((e) => e.channelName).includes(search) === true) ? <>
                    <button onClick={() => tab("watched")}>watched</button>
                    <button onClick={() => tab("unwatched")}>unwatched</button>
                    <button onClick={() => tab("videos")}>videos</button>
                    <button onClick={() => tab("shorts")}>shorts</button>
                    <button onClick={() => tab("All")}>All</button>
                </> :
                    <>
                        <button onClick={() => funexpr("javaScript")}>JavaScript</button>
                        <button onClick={() => funexpr("music")}>music</button>
                        <button onClick={() => funexpr("cartoon")}>cartoon</button>
                        <button onClick={() => funexpr("mixes")}>mixes</button>
                        <button onClick={() => funexpr("T-series")}>tseries</button>

                      
                    </>
            }




            <button onClick={() => { submitText(search) }}>submit</button>


            {
                (click === filterchannel || click === filterchannel2) ? click.map((e) => {
                    return (
                        <Fragment>
                            <h1>{e.channelName}</h1>


                            
                            <h5>{e.title}</h5>
                            <p>{e.views}</p>


                        </Fragment>
                    )
                }) :
                    (click).map((e, id) => {

                        return (
                            <div key={id}>
                            
                            <img src={e.src} 
                            onClick={()=>videoFun(e.name)}/>
                            </div>
                        )
                    })
                    

            }


            {
                vi.map((e)=>{
                    return(
                        <>
                        <h1>{e.name}</h1>
                        <IFrame
                        link = {e.videoLink.link1}
                        />
                        </>
                    )
                })
            }
<Video
vi = {vi}
/>



            
        </Fragment>
    )
}

export default YoutubeClone;
export { iframe };