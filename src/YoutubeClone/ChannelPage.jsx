import React, { Fragment, useEffect, useState } from "react";
import YoutubeData, { ThapaTechnical } from "./ApnaDataBase";
import { NavLink, useNavigate } from "react-router-dom";
const subImg = [
    {
        img: "/Images/all.png",
        name: "All",
        id: 1
    },
    {
        img: "/Images/person.png",
        name: "Personalize",
        id: 2
    },
    {
        img: "/Images/none.png",
        name: "None",
        id: 3
    },
    {
        img: "/Images/unsub.png",
        name: "Unsubscribe",
        id: 4
    }
]
const ChannelPage = () => {
    const navigate = useNavigate()
    const [channel, setchannel] = useState(YoutubeData);
    const [sub, setSub] = useState(false);
    const chanFun = (id) => {
        const filterchan = YoutubeData.filter((e) => {
            return e.id === id
        })

        setchannel(filterchan)
        navigate(`/chandata/${id}`)
    }

    console.log(channel)
    const all = (id) => {
        const filtericon = subImg.find((e) => {
            return e.id === id;
        })

        setSub(filtericon)


    }

    console.log(sub)
    return (
        <>
            <div className="bg-dark text-white" style={{ width: "100%", height: "50%" }}>
                <h1>Qrcode</h1>
            </div>
            <button>Home</button>
            <button>video</button>
            <button>community</button>
            <div>
                <NavLink exact to="/channel">
                    <img src="/Images/thapalogo.png" />
                </NavLink>

                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        {sub.name === "Unsubscribe" ? <>
                            Subscribe
                        </> : <>
                            <img src={sub.img} />
                            Subscribed
                        </>
                        }
                    </button>
                    <ul className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton1">

                        {
                            subImg.map((e) => {
                                return (
                                    <Fragment>
                                        <li onClick={() => all(e.id)}><a className="dropdown-item text-white" href="#">
                                            <img src={e.img} />
                                            {e.name}</a></li>
                                    </Fragment>
                                )
                            })
                        }

                        {
                            sub.name === "Unsubscribe" ? alert("unsubscribe")
                                : ""
                        }

                    </ul>
                </div>

            </div>
            {
                channel.map((e) => {
                    return (
                        <>
                            <img src={e.channelData} onClick={() => chanFun(e.id)} />
                        </>
                    )
                })
            }

        </>
    )
}

export default ChannelPage;