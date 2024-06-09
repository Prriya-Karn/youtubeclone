import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
const thapaButt = [
    {
        id: 1,
        buttName: "All",
        src: "/Images/javascript.jpg",
          src1:  "/Images/cartoon.jpg",
          src2:  "/Images/tseries.jpg",
            src3 : "/Images/kishorekumar.png",
            chanName:"Thapa Technical",
            chan1Name:"SOFTOONS KAHANIYA",
            chan2Name:"Tseries Bhakti Sagar",
            chan3Name:"Kishore Kumar Official",
            title:"JavaScript Full Course Tutorial for Beginners in Hindi🔥Free Notes with 10+ Projects",
            title1:"लालची किसान | Hindi Kahani | Cartoon | Comedy Video | Indian Village Tales |",
            title2:"T-Series Bhakti Sagar Best collection I Morning Time Bhajans I GULSHAN KUMAR",
            title3:"Kishore Kumar Hits | किशोर कुमार के दर्द भरे गीत | 90s Puraane Gaane | Kishore Kumar Evergreen Songs",
            chanView:"3 lakh views - 8 months ago",
            chanView1:"2.6 lakh views - 9 months ago",
            chanView2:"6 lakh views - 10 months ago",
            chanView3:"7 lakh views - 2 months ago",
            chanView4:"8 lakh views - 5 months ago",
        
    },


    {
        id: 2,
        buttName: "From Thapa Technical",
        src: "/Images/download.jpg",
        src1:  "/Images/css.jpg",
        src2:  "/Images/fest.jpg",
          src3 : "/Images/typescript.jpg",

          chanName:"Thapa Technical",
          chan1Name:"Thapa Technical",
          chan2Name:"Thapa Technical",
          chan3Name:"Thapa Technical",
          title:"HTML Complete Tutorial for Beginners in Hindi🔥Free Notes + Codes",
          title1:"Complete CSS Tutorial for Beginners in Hindi 🎓 Free Notes & Codes ",
          title2:"Create Animated Website Using HTML5 & CSS3 in Hindi",
          title3:"Typescript Tutorial in Hindi",
          chanView:"3 lakh views - 8 months ago",
          chanView1:"3.6 lakh views - 8 months ago",
          chanView2:"2.4 lakh views - 7 months ago",
          chanView3:"10 lakh views - 4 years ago",
          chanView4:"83k views - 10 months ago",
    },
    {
        id: 3,
        buttName: "Web Dev",
        src: "/Images/webdev.png",
        src1:  "/Images/webdev1.png",
        src2:  "/Images/webdev2.png",
          src3 : "/Images/webdev3.png",

          chanName:"CodeHelp - by Babbar",
          chan1Name:"CodeWithHarry",
          chan2Name:"devdotcode",
          chan3Name:"edureka!",
          title:"Let's learn Full Stack Web Development using MERN Stack",
          title1:"Introduction to HTML, CSS, JavaScript & How websites work? | Web Development Tutorials",
          title2:"Intro to Web Development #01 - What is Web Development?",
          title3:"HTML Tutorial: What Is HTML? | Create Web Page Using HTML | Learn HTML in 20 Minutes | Edureka",
          chanView:"8.2 lakh views  1 year ago",
          chanView1:"3.6 lakh views - 8 months ago",
          chanView2:"2.4 lakh views - 7 months ago",
          chanView3:"10 lakh views - 4 years ago",
          chanView4:"83k views - 10 months ago",
    },
    {
        id: 4,
        buttName: "Watched",
        src: "/Images/download.jpg",
        src1:  "/Images/webdev1.png",
        src2:  "/Images/webdev2.png",
        src3 : "/Images/kishorekumar.png",
          chanName:"Thapa Technical",
          title:"HTML Complete Tutorial for Beginners in Hindi🔥Free Notes + Codes",
          title1:"Introduction to HTML, CSS, JavaScript & How websites work? | Web Development Tutorials",
           title2:"Intro to Web Development #01 - What is Web Development?",
         title3:"Kishore Kumar Hits | किशोर कुमार के दर्द भरे गीत | 90s Puraane Gaane | Kishore Kumar Evergreen Songs",
         
         
          chanView:"3 lakh views - 8 months ago",
          chanView1:"2.6 lakh views - 9 months ago",
          chanView2:"6 lakh views - 10 months ago",
          chanView3:"7 lakh views - 2 months ago",
          chanView4:"8 lakh views - 5 months ago",
    },
];

const mysirButt = [
    // {
    //     all: "All",
    //     computer: "Computer programming",
    //     lessons: "Lessons"
    // }
]


const DetailButt = () => {
    const { name } = useParams();
    const [All, setAll] = useState(thapaButt);
    const filterData = (id) => {
        const fil = thapaButt.filter((e) => {
            return e.id === id;
        })
        setAll(fil)
    }

console.log(All)


    return (
        <div className="btnchandata">

            
                {name === "thapatechnical" && thapaButt.map((e) => (
                    <Fragment>
                        <button className="btn" onClick={() => filterData(e.id)}>{e.buttName}</button>
                    </Fragment>
                ))}

                
            

{
    name === "thapatechnical" && All.map((e) => (
        <div className="imagefilter">
        <div className="innerimage d-flex">
        <img src={e.src}/>
        <div>
        <p className="tit">{e.title.length>10?e.title.slice(0,49)+"...":e.title}</p>
        <p className="channame">{e.chanName}</p>
        <p className="chanview">{e.chanView}</p>
        </div>
        </div>
        <div className="innerimage d-flex">
        <img src={e.src1}/>
        <div>
        <p className="tit">{e.title1.length>10?e.title1.slice(0,49)+"...":e.title1}</p>
        <p className="channame">{e.chan1Name}</p>
        <p className="chanview">{e.chanView1}</p>
        </div>
        </div>
        <div className="innerimage d-flex">
        <img src={e.src2}/>
        <div>
        <p className="tit">{e.title2.length>10?e.title2.slice(0,49)+"...":e.title2}</p>
        <p className="channame">{e.chan2Name}</p>
        <p className="chanview"s>{e.chanView2}</p>
        </div>
        </div>
        <div className="innerimage d-flex">
        <img src={e.src3}/>
        <div>
        <p className="tit">{e.title3.length>10?e.title3.slice(0,49)+"...":e.title3}</p>
        <p className="channame">{e.chan3Name}</p>
        <p className="chanview">{e.chanView3}</p>
        </div>
        </div>
        </div>
    ))
}

            </div>

)


}

export default DetailButt;
export { thapaButt };



