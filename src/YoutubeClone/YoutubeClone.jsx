import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import _ from "lodash";
const API_KEY = 'AIzaSyD939b6ColhhVBzg3vseJPQ_6i_gm0yHNs';
const YoutubeClone = () => {

    const [data, updateData] = useState([]);
    const [list, updateList] = useState([]);
    const [enter, updateEnter] = useState("");
    debugger;
    const api = async () => {
        try {
            const fetchApi = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet,id&key=${API_KEY}&type=video&q=${enter}`)
            const fres = await fetchApi.json();
            updateData(fres.items[0].id.videoId);
            updateList(fres.items)

        }
        catch (error) {
            console.log(`error is ${error}`)
        }
    }

//trottle

    const inputdata = _.debounce((event) => {
        updateEnter(event.target.value)
    }, 1000)

    useEffect(() => {
        api(enter);
    }, [enter])

    console.log(enter)
console.log(data)








    return (
        <>
            <input type="text" onChange={inputdata} />

            <>
                <iframe width="560" height="315"
                    src={`https://www.youtube.com/embed/${data}`}
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </>

            {
                list.map((e) => {
                    return (
                        <>
                            <iframe width="560" height="315"
                                src={`https://www.youtube.com/embed/${e.id.videoId}`}
                                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


                        </>
                    )
                })
            }
        </>
    )
}

export default YoutubeClone;




// https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=YOUR_API_KEY
//      &part=snippet,statistics&fields=items(id,snippet,statistics)


// movie api = https://www.omdbapi.com/?apikey=a0b26e7d&t=titanic