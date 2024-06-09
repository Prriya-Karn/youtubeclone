import React, { Fragment, useState } from "react";
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import IFrame from "./IFrame";
import ButtonChan from "./ButtonChan";
import { getDta, getdta } from "./ChannelData";
import Subscribe from "./Subscribe";
import ThapaMessage, { mysirgMessage } from "./Message";
import Search from "./Search";
import DetailButt from "./DetailButt";
const YoutubeDetail = ({youtubedata})=>{
    const navigate = useNavigate();
  const [moreData,setmoreData] = useState(false);
    const { id } = useParams();  //url se id le rha hai after path="/image/:id" useParam
    console.log(id)
    const chanNavigate = ()=>{
        navigate("/chan")
    }
  const selectedImage = youtubedata.find(image => image.id === parseInt(id));
  console.log("Selected Image:", selectedImage);

  
  const more = ()=>{
    setmoreData(!moreData)
  }
//   console.log(moreData);
  
  const less = ()=>{
    setmoreData(false)
  }


    return(
       <>
 <Search/>
    <div className="mainchandata detail-main">
        <div className="videochan">
           
    <IFrame link = {selectedImage.videoLink.link1}/>
    <p className="channeltit">{selectedImage.title}</p>
    <div className="commentchan">
    <img className="chanl" src={selectedImage.logo} />
    <p className="chan">{selectedImage.channelName}</p>
    <div className="joinchan">
    <button className="btn joinbutt">Join</button>
    <div className="chansubs">
        <Subscribe/>
    </div>
</div>
<div className="likedislike">
<button className="btn like">
    <img src="/Images/Like.png" /><span>11k</span></button>
<button className="btn dislike dis"><img src="/Images/dislike.png" /></button>
</div>

<div className="share">
<button className="btn"><img src="/Images/share.png" /><span>Share</span></button>
</div>
<div className="download">
<img src="/Images/download.png" />
</div>
</div>
<p className="subschan">{selectedImage.subscribers}</p>

<div className="chanDesc">
<p>{selectedImage.chanView}</p>

{selectedImage.description.length >= 1 ? selectedImage.description.slice(0,90) : ""}
{
    moreData === false ? <button className="btn moredesc more" onClick={more}>more</button>
        :
        <Fragment>{selectedImage.description}
            <button className="btn lessdesc less" onClick={less}>less</button>
        </Fragment>
}
</div>
<div className="commentAdd">
<input type="text" placeholder="Add a comment"/>
<button className="btn">Comment</button>
</div>



<div className="message d-flex mt-4">
      
<p className="proName"></p>
<p className="comment"></p>
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
<DetailButt/>
</div>
</>
    
    )
}


export default YoutubeDetail