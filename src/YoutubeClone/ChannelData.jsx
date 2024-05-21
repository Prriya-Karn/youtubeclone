import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import YoutubeData, { ThapaTechnical, mysirg } from "./ApnaDataBase";
import IFrame from "./IFrame";
import Search from "./Search";
import Subscribe from "./Subscribe";
import ThapaMessage, { mysirgMessage } from "./Message";
import ButtonChan, { thapaButt } from "./ButtonChan";

const ChannelData = () => {
    const [desc, setdesc] = useState(false);
    const [com,setcom] = useState();
    const [clickCom,setCom] = useState(true);
    const { ID, name } = useParams()
    const getDta = name === "thapatechnical" ? ThapaTechnical.find((e) => e.IDData === ID)
        : name === "mysirg" ? mysirg.find((e) => e.IDData === ID) : ""
    console.log(getDta)

    const moredesc = () => {
        setdesc(!desc)
    }
    const less = () => {
        setdesc(false)
    }

    const writeCom = (event)=>{
        setcom(event.target.value);
    }

    const commentclick = ()=>{
        setCom(com)
    }

    console.log(clickCom)

    return (
        <>
        <Search
       
    />
            <div className="mainchandata">
                <div className="videochan">
                    <IFrame link={getDta.link} />
                    <p className="channeltit">{getDta.channeltit}</p>
                    <div className="commentchan">
                        <img className="chanl" src={getDta.logo} />
                        <p>{getDta.chanName}</p>
                        <div className="joinchan">
                            <button className="btn joinbutt">Join</button>
                            <div className="chansubs">
                                <Subscribe />
                            </div>
                        </div>
                        <div className="likedislike">
                            <button className="btn like">
                                <img src="/Images/Like.png" /><span>11k</span></button>
                            <button className="btn dislike"><img src="/Images/dislike.png" /></button>
                        </div>

                        <div className="share">
                            <button className="btn"><img src="/Images/share.png" /><span>Share</span></button>
                        </div>
                        <div className="download">
                            <img src="/Images/download.png" />
                        </div>

                    </div>
                    <p className="subschan">{getDta.subscribers}</p>

                    <div className="chanDesc">
                        <p>{getDta.chanView}</p>
                        {getDta.chanDesc.length >= 10 ? getDta.chanDesc.slice(0, 100) : ""}
                        {
                            desc === false ? <button className="btn moredesc" onClick={moredesc}>more</button>
                                :
                                <Fragment>{getDta.chanDesc}
                                    <button className="btn lessdesc" onClick={less}>less</button>
                                </Fragment>
                        }


                    </div>
                    <div className="commentAdd">
                        <input type="text" placeholder="Add a comment" onChange={writeCom} />
                        <button className="btn" onClick={commentclick}>Comment</button>
                    </div>
                    <div>
                  
                        <div className="message d-flex mt-4">
                    <img src="/Images/logo.png"/>
                    <p className="proName"></p>
                    <p className="comment">{clickCom}</p>
                    </div>
                   
                        {
                            (ThapaMessage || mysirgMessage).map((e) => {
                                return (
                                    <Fragment>
                                        <div className="message d-flex mt-4">
                                            <img src={e.pro} />
                                            <p className="proName">{e.name}</p>
                                          
                                        </div>
                                        <p className="comment">{e.message}</p>
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </div>
<ButtonChan/>
                
                
            </div>

        </>
    )
}

export default ChannelData;