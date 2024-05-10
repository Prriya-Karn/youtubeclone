import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import YoutubeDetail from "./YoutubeDetail";
import YoutubeData from "./ApnaDataBase";
import {useNavigate} from 'react-router-dom';

// const images = [

//       { id: 1, name: "Image 1",src:"/Images/music.jpg", description: "Description 1",
//       videoLink: "https://www.youtube.com/embed/W6NZfCO5SIk?si=s4ciLBRJ0jwSwnhs"
// },

//       { id: 2, name: "Image 2", src:"/Images/js.jpg", description: "Description 2",
//       videoLink: "https://www.youtube.com/embed/W6NZfCO5SIk?si=s4ciLBRJ0jwSwnhs"
//        },

//       // Add more images as needed


//   ]


const Video = ({click}) => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(YoutubeData);
console.log(click)

  const handleClick = (imageId) => {
    // const image = YoutubeData.find(image => image.id === imageId);
    // // console.log("Selected Image:", image);
    // setSelectedImage(image);
    navigate(`/image/${imageId}`)   //path="/image/:id" 
};
  // console.log(selectedImage)
 


  //   const [vide,setvide] = useState([]);
  //   const filterimg = (img)=>{
  //     const filterImage = image.filter((e)=>{
  //       return e.name === img;

  //     })
  //     setvide(filterImage)
  //   }
  // console.log(vide)
  return (
    <>

      {
        click.map(image => (
          <div key={image.id} onClick={() => handleClick(image.id)}>
            <img src={image.src} alt={image.name} />
            <h1>{image.name}</h1>
          </div>
        ))
      }
    </>
  )
}

export default Video;






