import { useEffect, useState } from "react"

export default function useeffect()
{
    //run once on mount
    useEffect(()=>{console.log('Called on mount')},[]);
    // const[count,setCount] = useState(0);

    //run when State changed
    useEffect(()=>{console.log(count)},[count]);
    return(
        <div>
            <h3> Count : {count}</h3>
            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
    )
}