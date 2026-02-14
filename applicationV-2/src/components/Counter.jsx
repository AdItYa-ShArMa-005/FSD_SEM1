import {useState} from "react" //hooks

export default function Counter()
{

    // function handleIncrement()
    // {
    //     count++;
    //     console.log(count);
    // }

    // function handleDecrement()
    // {
    //     count--;
    //     console.log(count);
    // }
    // using state in react

    const [count,setCount] = useState(0);
    const[Name,setName] = useState("admin")
    // function handleIncrement()
    // {
    //     setCount(count => count+1);
    // }
    // function handleDecrement()
    // {

    //     setCount(count => count-1);

    // }

    function handleSubmit(e)
    {
        e.preventDefault();
        let n = e.target.task.value.trim();
        if(n === "")
        {
            alert("Invalid name");
            return;
        }
        setName(Name => n);
    }

    return(
        <>
            <h3>Enter your name:</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" placeholder="Enter your name"></input>
                <button type="submit" >Login</button>
            </form>

            <h1>-------------Counter App-----------</h1>
            <h1>Hello {Name}, this is your counter.</h1>
            <h3>count: {count}</h3>
            <button onClick={() => setCount(count => count+1)}>Click to increase</button><br></br>
            <button onClick={() => setCount(count => count-1)}>Click to decrease</button>

        </>
    )
}