import React, { Fragment, useState } from "react";
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
const Subscribe = ()=>{
    const [sub, setSub] = useState([]);
    

    const all = (id) => {
        const filtericon = subImg.find((e) => {
            return e.id === id;
        })

        setSub(filtericon);
       
    }
    return(
        <Fragment>
        
        <div className="dropdown-main">
        <div className="dropdown">
                <button className="btn btn-secondary d-flex" 
              
                type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                   {
                    sub.length===0?
                    <div>
                    <img src={sub.img} />
                    Subscribe
                    </div>
                   :
                   sub.name==="Unsubscribe"?<>
                   <p>Subscribe</p>
                   </>

                   :
                   <div>
                   <img src={sub.img} />
                   Subscribed
                   </div>
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
      
        </Fragment>
    )
}

export default Subscribe;