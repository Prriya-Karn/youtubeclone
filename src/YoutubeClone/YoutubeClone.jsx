import React, { Fragment, createContext, useState } from "react";

import YoutubeData, { ThapaTechnical, mysirg } from "./ApnaDataBase";
import { NavLink, useNavigate } from "react-router-dom";
import IFrame from "./IFrame";
import Chan from "./Chan";
import Video from "./Video";
import Search from "./Search";
import HomeButtons from "./HomeButtons";
import TabButtons from "./TabButtons";
import Posts from "./Posts";
import LogoContent, { Thapa } from "./LogoContent";
import PostData, { sirg, sirgPostData } from "./PostData";
import ThapaPostData from "./PostData";
import ChannelPage from "./ChannelPage";
import SideBar from "./SideBar";
import Subscribe from "./Subscribe";
import TabFilter from "./TabFilter";


const iframe = createContext();
var filterchannel;
var filterchannel2;
var filterTab;
var filterTab1;
const YoutubeClone = () => {
    const [click, setClick] = useState(YoutubeData);
    const [search, setSearch] = useState();
    const [searchData, setSearData] = useState([]);
    const navigate = useNavigate();
    const [moreDataShow, setmoreDataShow] = useState(false)

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

    const all = () => {
        setClick(YoutubeData)
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
        }

        filterchannel = ThapaTechnical.filter((e) => {
            return e.channelName.toUpperCase() === s.toUpperCase()
        })
        if (ThapaTechnical.map((e) => e.channelName).includes(search) === true) {
            (setClick(filterchannel))
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
      filterTab = (ThapaTechnical).filter((e)=>{
        return s===e.options;
      })
      filterTab1 = mysirg.filter((e)=>{
        return s===e.options
      })

      if(ThapaTechnical.map((e)=>e.channelName).includes(search)){
        setClick(filterTab)
      }else if(mysirg.map((e)=>e.channelName).includes(search)){
        setClick(filterTab1)
      }

    //   if(s==="All"){
    //     filterTab = ThapaTechnical
    //     setClick(filterTab)
    //   }

      console.log(click)
     
    }





    const clickImage = (name) => {
        const res = (ThapaTechnical).find((e) => e.channelName === name
        ) || mysirg.find((e) => {
            return e.channelName === name
        })
        navigate(`/channelpage/${name}`)

        console.log(res);
    }

    const moreIframe = () => {
        setmoreDataShow(true)
    }
    // console.log(moreDataShow)

    const thapaData = ThapaTechnical.find((e) => {
        return e.channelName
    })

    const postdata = PostData.find((e) => {
        return e.name;
    })

    // console.log(thapaData === postdata)


    return (
        <Fragment>

            <div className="main-home d-flex">
                <div className="sidebar">
                    <SideBar />


                    <Search
                        onchangeFun={searchText}
                        submitText={submitText}
                        search={search}
                    />

                    <TabFilter
                    click = {click}
                    filterchannel = {filterchannel}
                    filterchannel2 = {filterchannel2}
                    filterTab = {filterTab}
                    filterTab1 = {filterTab1}
                    tab = {tab}
                    clickImage = {clickImage}
                    funexpr = {funexpr}
                    all = {all}
                    />


                    {/*channel page start from here*/}

                    {
                        (click === filterchannel || click === filterchannel2)
                            ? click.map((e) => {

                                return (
                                    <Fragment>

                                        <div className="iframe-chan d-flex">

                                            <iframe className="m-5 chan-iframe"
                                                src={e.link}
                                                title="YouTube video player"
                                            >
                                            </iframe>

                                            <div className="chan-descr">
                                                <h5>{e.tit}</h5>
                                                <p>{e.views}</p>

                                                <div className="d-flex chan-logo-1"
                                                    onClick={clickImage}>

                                                    <img src={e.logo} />
                                                    <p>{e.channelName}</p>
                                                </div>
                                                <p className="desc">{e.description}</p>
                                                <p className="tag">{e.tag}</p>
                                            </div>


                                        </div>

                                    </Fragment>

                                )
                            }) :
                            <Fragment>
                                <Video
                                    click={click}
                                />

                            </Fragment>

                    }


                    {
                        moreDataShow === false ?
                            (click === filterchannel || click === filterchannel2) ?
                                <Fragment>
                                    <h1 onClick={moreIframe} className="moreData">+6 More</h1>

                                </Fragment> : ""
                            :
                            (("thapatechnical").toLowerCase().includes(search) === true)
                                || (("mysirg").toLowerCase().includes(search) === true)
                                ?


                                <div>


                                    <Chan click={click} clickImage={clickImage} />
                                    {
                                        ThapaPostData.map((e) => e.name).includes(search) === true
                                            ?
                                            <Fragment>
                                                <div className="channel-head double-border">
                                                    <h1>Latest posts from Thapa Technical</h1>
                                                </div>


                                                <div className="Main container">
                                                    {

                                                        ThapaPostData.map((e) => {
                                                            console.log(e)
                                                            return (
                                                                <Fragment>
                                                                    <div className="main-card d-flex mb-3">


                                                                        <div className="card-body">
                                                                            <LogoContent
                                                                                clickImage={clickImage}
                                                                                search={search}
                                                                            />
                                                                            <Posts
                                                                                content={e.content}
                                                                                PostImage={e.PostImage}
                                                                                search={search}
                                                                            />

                                                                        </div>
                                                                    </div>

                                                                </Fragment>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </Fragment>

                                            : sirgPostData.map((e) => e.name).includes(search) === true ?

                                                <Fragment>
                                                    <div className="channel-head double-border">
                                                        <h1>Latest posts from mysirg</h1>
                                                    </div>
                                                    <div className="Main container">
                                                        {

                                                            sirgPostData.map((e) => {
                                                                console.log(e)
                                                                return (
                                                                    <Fragment>

                                                                        <div className="main-card d-flex mb-3">


                                                                            <div className="card-body">
                                                                                <LogoContent
                                                                                    clickImage={clickImage}
                                                                                    search={search}
                                                                                />
                                                                                <Posts
                                                                                    content={e.content}
                                                                                    PostImage={e.PostImage}
                                                                                    search={search}
                                                                                />

                                                                            </div>
                                                                        </div>

                                                                    </Fragment>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </Fragment> : ""
                                    }




                                </div>
                                : ""

                    }






                </div>
            </div>


        </Fragment>
    )
}

export default YoutubeClone;
export { iframe };