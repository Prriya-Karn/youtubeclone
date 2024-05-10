import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import IFrame from "./IFrame";
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
  console.log(moreData);
  
  const less = ()=>{
    setmoreData(false)
  }


    return(
        <>
        {
            <>
           
            <IFrame
            link = {selectedImage.videoLink.link1}
            />
            <div>
            <h2 className="">{selectedImage.title}</h2>
            </div>
            
            <div className="logo d-flex">
            
            <img src="/Images/thapalogo.png" onClick={chanNavigate}/>
          
            <div>
            <h2>Thapa Technical</h2>
            <p>6.63 lakh subscribers</p>
            </div>
           <button className="btn">Join</button>
           <button className="btn">Subscribe</button>
           <button className="btn"><img src="/Images/like.png"/></button>
           <button className="btn"><img src="/Images/dislike.png"/></button>
            </div>
            <div className="description">
            <p>{selectedImage.description}
            {
                (moreData===false)? <button className="more btn" onClick={more}>
                more
                </button>:""
            }
           
            {
                (moreData===true)?<><p>
                hi priya
                </p>
                <button className = "btn" onClick= {less}>Less more</button>
                </> 
                :""
            }
            
            </p>
            </div>


            
            </> 
        }
        </>
    )
}

export default YoutubeDetail;


