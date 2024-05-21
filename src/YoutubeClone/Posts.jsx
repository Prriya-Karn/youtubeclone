import React, { Fragment } from "react";
import { ThapaTechnical } from "./ApnaDataBase";
import PostData, { sirgPostData } from "./PostData";
import ThapaPostData from "./PostData";

const Posts = ({search,PostImage,content}) => {
    return (
        <Fragment>
      {
        ThapaPostData.map((e) => e.name).includes(search) === true?
        <Fragment>
        <div className="d-flex col-md-4 card-body">
        <p className="card-text content">
        {
           content.length>=10? content.substr(0,100)+"...": content
        }
        </p>
       
        <img src={PostImage} className="img-fluid rounded-start postImage" alt="..."/>
        </div>
             
        <div className="like-dislike">
        <div className="btn-like-dislike d-flex">
        <img src="/Images/like.png"/>
        <img className="dislike" src="/Images/dislike.png"/>
        </div>
   
       <div className="comment d-flex">
       <img src="/Images/comment.png"/>
       <img src="/Images/threeDot.png"/>
       </div>
   
        </div>
       
          
        </Fragment>:

        sirgPostData.map((e) => e.name).includes(search) === true ?
        <Fragment>
        <div className="d-flex col-md-4 card-body">
        <p className="card-text content">
        {
           content.length>=10? content.substr(0,100)+"...": content
        }
        </p>
       
        <img src={PostImage} 
        className="img-fluid rounded-start postImage" alt="..."/>
        </div>
             
        <div className="like-dislike">
        <div className="btn-like-dislike d-flex">
        <img src="/Images/like.png"/>
        <img className="dislike" src="/Images/dislike.png"/>
        </div>
   
       <div className="comment d-flex">
       <img src="/Images/comment.png"/>
       <img src="/Images/threeDot.png"/>
       </div>
   
        </div>
       
          
        </Fragment>:""
      }
   
</Fragment>
    )
}


export default Posts;


