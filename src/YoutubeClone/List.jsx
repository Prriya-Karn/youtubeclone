// import React, { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// const API_KEY = 'AIzaSyD939b6ColhhVBzg3vseJPQ_6i_gm0yHNs';
// const List = () => {

//     const [data, updateData] = useState([]);
//     const api = async () => {
//         try {
//             const fetchApi = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet,id&key=${API_KEY}&type=video&q=softooncartoon`)
//             const fres = await fetchApi.json();
//             updateData(fres.items);
//         }
//         catch (error) {
//             console.log(`error is ${error}`)
//         }
//     }

//     useEffect(() => {
//         let time = setTimeout(() => {
//             api();
//         }, 2000)

//         return () => clearTimeout(time);
//     },[]);


//     console.log(data)

//     return (
//         <>

//             <>

//             </>
//         </>
//     )
// }

// export default List;




// // https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=YOUR_API_KEY
// //      &part=snippet,statistics&fields=items(id,snippet,statistics)


// // movie api = https://www.omdbapi.com/?apikey=a0b26e7d&t=titanic