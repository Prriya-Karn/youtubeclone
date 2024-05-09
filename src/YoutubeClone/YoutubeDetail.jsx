import React from "react";
import { useParams } from 'react-router-dom';
import IFrame from "./IFrame";
const YoutubeDetail = ({youtubedata})=>{
  
    const { id } = useParams();  //url se id le rha hai useParam
    console.log(id)
    // const imageData = { id: 1, title: 'Image 1',
    //  description: 'Description of Image 1' }; // Fetch this data based on the id
//     console.log("ID:", id);
//   console.log("Images:", images);
  const selectedImage = youtubedata.find(image => image.id === parseInt(id));
  console.log("Selected Image:", selectedImage);
    return(
        <>
        {
            <>
            <h1>{selectedImage.name}</h1>
            <img src = {selectedImage.src}/>
            <h2>{selectedImage.id}</h2>
            <IFrame
            link = {selectedImage.videoLink.link1}
            />
            </>
        }
        </>
    )
}

export default YoutubeDetail;


