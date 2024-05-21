import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
const thapaButt = [
    {
        all : "All",
        from : "From Thapa Technical",
        web : "Web Dev"
    }
];
const mysirButt = [
    {
        all : "All",
        computer : "Computer programming",
        lessons : "Lessons"
    }
]
const ButtonChan = ({all,from,web})=>{
    const {name} = useParams();
    
    return(
        <div className="btnchandata">
        
{
    name === "thapatechnical"?thapaButt.map((e)=>
            <Fragment>
            <button className="btn" onClick="{all}">{e.all}</button>
            <button className="btn" onClick="{from}">{e.from}</button>
            <button className="btn" onClick="{web}">{e.web}</button>

            </Fragment>        
    ):name==="mysirg"?mysirButt.map((e)=><Fragment>
    <button className="btn">{e.all}</button>
    <button className="btn">{e.computer}</button>
    <button className="btn">{e.lessons}</button>

    </Fragment>):""
}
    
    </div>
    )
}

export default ButtonChan;
export {thapaButt,mysirButt};



