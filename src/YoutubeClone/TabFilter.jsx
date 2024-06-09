import React, { Fragment } from "react";
import TabButtons from "./TabButtons";
import Subscribe from "./Subscribe";
import HomeButtons from "./HomeButtons";
const TabFilter = ({click,filterTab,
    filterTab1,filterchannel,filterchannel2,
    tab,clickImage,funexpr,all})=>{
    return(
        <Fragment>
        

        {
            (click === filterchannel||
                click===filterTab)
                ?
                 <Fragment>
           <TabButtons tab={tab} />
            
                <div className="main-c">
                    <div className="chanLogo d-flex"
                        onClick={() => clickImage("thapatechnical")}>
                        <img src="/Images/thapalogo.png" />
                        <p>Thapa Technical</p>
                    </div>

                    <div className="content-chan">
                        <p>@ThapaTechnical • 6.63 lakh subscribers</p>
                        <p className="sub">
                            Welcome Guys, This channel is all about Website
                            Development, Technical, Tips and Tricks, Designs
                            Principle and Programming videos in the Hindi Language.
                        </p>
                        <div className="channelsubs">
                            <Subscribe/>
                        </div>


                    </div>
                    <div className="channel-head">
                        <h1>Latest from Thapa Technical</h1>
                    </div>

                </div>

            </Fragment>

                : (click === filterchannel2|| click===filterTab1) ?

                    <Fragment>
                    <TabButtons tab={tab} />
                    
                        

                        <div>
                            <div className="chanLogo d-flex"
                             onClick={() => clickImage("mysirg")}>
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
                    </Fragment>
                    :
                    
                    <HomeButtons
                        HomeFun={funexpr}
                        all={all}
                    />
                    
        }



        
        </Fragment>
    )
}

export default TabFilter;