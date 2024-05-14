import React from "react";
import { useNavigate } from "react-router-dom";
const Search = ({onchangeFun,submitText,search})=>{
    const navigate = useNavigate();
    const mic = ()=>{
        navigate('/mic')
    }
    return(
        <>
        <div className="searchInput d-flex">
        <input type="text" className="m-2"
        onChange={onchangeFun}
        placeholder="Search" />
        <div className="search-inp">
        <img src = "/Images/search.png" onClick={()=>submitText(search)}/>
        </div>
        </div>

        <div className="mic">
        <img src="/Images/mic.png" className="" onClick={mic}/>
        </div>

        
        </>
    )
}

export default Search;