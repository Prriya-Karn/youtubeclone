import React, { Fragment, createContext, useEffect, useState } from "react";
import YoutubeData, { ThapaTechnical } from "./ApnaDataBase";
import { NavLink } from "react-router-dom";
import IFrame from "./IFrame";
import Chan from "./Chan";

const iframe = createContext();
const YoutubeClone = () => {
    const [click, setClick] = useState(YoutubeData);
    const [search, setSearch] = useState();
    const [searchData, setSearData] = useState([]);

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

        var filterchannel = ThapaTechnical.filter((e) => {
            return e.channelName.toUpperCase() === s.toUpperCase()
        })
        if(ThapaTechnical.map((e)=>e.channelName).includes(search)===true){
            (setClick(filterchannel))
            console.log(filterchannel)
            console.log(true)
        }else{
            console.log(false)
        }
    }
        
   
    return (
        <Fragment>

            <input type="text" className="m-2" onChange={searchText} placeholder="search" />
            <button className="btn" onClick={() => funexpr("JavaScript")}>javaScript</button>
            <button className="btn" onClick={() => funexpr("Music")}>Music</button>
            <button className="btn" onClick={() => funexpr("cartoon")}>Cartoon</button>
            <button className="btn" onClick={() => funexpr(YoutubeData[3].name)}>Mixes</button>



          
                
                 <button onClick={() => { submitText(search) }}>submit</button>
         
             {
                click.map((e)=>{
                    return(
                        <>
                        <h1>{e.channelName}</h1>
                        <IFrame link= {e.link}/>
                        <h5>{e.title}</h5>
                        <p>{e.views}</p>
                        </>
                    )
                })
             }   
               

            {
                (click).map((e, id) => {

                    return (
                        <div key={id}>
                            <h1>{e.name}</h1>

                            <IFrame link={e.videoLink.link1} />
                            <IFrame link={e.videoLink.link2} />
                            <IFrame link={e.videoLink.link3} />
                            <IFrame link={e.videoLink.link4} />

                        </div>
                    )
                })
            }
            
        </Fragment>
    )
}

export default YoutubeClone;
export { iframe };