export default function EventToDo()
{
    function handleClick1(name)
    {
        alert(`You just pressed button at ${name}`);
    }

    function handleClick2()
    {
        console.log(prompt("Welcome here!!"));
    }
    return (
        <div>
            <h1>Event handler</h1>
            <button onClick={() => handleClick1("KIET")}>Click me</button>
            <button onClick={handleClick2}>Press here</button>
        </div>
    )
}