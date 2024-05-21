import React, { Fragment, createContext, useEffect, useRef, useState } from "react";

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


const iframe = createContext();
var filterchannel;
var filterchannel2;
var res;
var res1;
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
        var filterTab = (ThapaTechnical).filter((e) => e.options === s)
            || mysirg.filter((e) => e.options === s)
        console.log(filterTab)
        if ((mysirg).map((e) => e.options).includes(s) === true
            || ThapaTechnical.map((e) => e.options.includes(s) === true)) {
            (setClick(filterTab))

            // console.log(filterTab)
            // console.log(true)
        }

        //here is the problem solve later
        if (s === "All") {

            setClick(filterchannel)
        }


    }




    // console.log(videos)



    const clickImage = (name) => {
        const res = (ThapaTechnical).find((e)=>e.channelName === name
        ) || mysirg.find((e)=>{
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
        <SideBar/>

        
                    <Search
                        onchangeFun={searchText}
                        submitText={submitText}
                        search={search}
                    />

                    {
                        ((ThapaTechnical).map((e) => e.channelName).includes(search) === true)

                            ?
                            <Fragment>
                                <TabButtons tab={tab} />

                                <div>
                                    <div className="chanLogo d-flex" onClick={()=>clickImage("thapatechnical")}>
                                        <img src="/Images/thapalogo.png" />
                                        <p>Thapa Technical</p>
                                    </div>

                                    <div className="content-chan">
                                        <p>@ThapaTechnical • 6.63 lakh subscribers</p>
                                        <p className="sub">Welcome Guys, This channel is all about Website
                                            Development, Technical, Tips and Tricks, Designs Principle
                                            and Programming ...</p>
                                    </div>
                                    <div className="channel-head">
                                        <h1>Latest from Thapa Technical</h1>
                                    </div>

                                </div>

                            </Fragment>

                            :
                            ((mysirg).map((e) => e.channelName).includes(search) === true) ?

                                <Fragment>
                                    <TabButtons tab={tab} />

                                    <div>
                                        <div className="chanLogo d-flex" onClick={()=>clickImage("mysirg")}>
                                            <img src="/Images/mysirgLogo.png" />
                                            <p>MySirG</p>
                                        </div>

                                        <div className="content-chan">
                                            <p>@MySirG • 6.63 lakh subscribers</p>
                                            <p className="sub">Welcome Guys, This channel is all about Website
                                                Development, Technical, Tips and Tricks, Designs Principle
                                                and Programming ...</p>
                                        </div>
                                        <div className="channel-head">
                                            <h1>Latest from MySirG</h1>
                                        </div>

                                    </div>

                                </Fragment> :

                                <Fragment>
                                    <HomeButtons
                                        HomeFun={funexpr}
                                        all={all}
                                    />
                                </Fragment>
                    }





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
                                                                                    search = {search}
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
                                                                                    search = {search}
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