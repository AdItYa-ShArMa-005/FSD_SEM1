import { use, useState } from "react"
export default SearchBar()
{
    const[Name,setName] = useState("");
    const[Names,setNames] = useState([]);
    return(
        <div>
            <h1>Search your name here.</h1>
            <input type="text" placeholder="Search Here" value ={Name}
            onChange={} />
        </div>

    )
}