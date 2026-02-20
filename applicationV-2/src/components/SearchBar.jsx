import { use, useState } from "react"
import SearchCard from "./searchCard";
export default function SearchBar()
{
    const[Name,setName] = useState("");
    const[Names,setNames] = useState([
  "Arjun Mehta",
  "Sofia Alvarez",
  "Caleb Morgan",
  "Lina Haddad",
  "Marcus Bennett",
  "Amara Okafor",
  "Ethan Park",
  "Isla Thompson",
  "Javier Castillo",
  "Naomi Chen",
  "Lucas Ferreira",
  "Mila Petrova",
  "Daniel Brooks",
  "Zara Rahman",
  "Owen Gallagher",
  "Kiara Singh",
  "Mateo Rossi",
  "Hannah Kim",
  "Victor Dubois",
  "Layla Hassan"
]);
    const[List,setList] = useState([]);

    function handleSearch(e)
    {
        let input = e.target.value;
        console.log(input );
        setName(e.target.value);
        console.log(Name);
        if(input === ""){
            setList([]);
            return;
        }
        setList(Names.filter((items,_) => items.toLowerCase().includes(input.toLowerCase()) == true));
        console.log(List);
    }

    // function handleSearchRequest(e)
    // {
    //      e.preventDefault();
    //     console.log("hello");
    //     // return(
    //     <div>
    //         {
    //          List.map((element,index) => (<SearchCard key={index} searchResult={element} />))
    //         }
    //     </div>
        
        
    // }

    return(
        <div>
            <h1>Search your name here.</h1>
            <input type="text" placeholder="Search Here" value ={Name} onChange={(e) => handleSearch(e)} />
            {/* <button type="submit" onClick={(e) => handleSearchRequest(e)}>search</button> */}
            <ul>
             {
                 List.map((items,index) => (
                    
                     <li key={index}><a href="#">{items}</a></li>
                 ))
             }
         </ul>
        </div>

    )
}