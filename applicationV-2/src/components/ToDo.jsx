import { useState } from "react";
export default function ToDo()
{

    //Manual Rendring
    // function handleSubmit(e)
    // {
    //     e.preventDefault();
    //     const input = e.target.task.value;
    //     const taskValue = input.trim();
    //     if(taskValue === ''){
    //         alert(`Cannot add empty task.`);
    //         return;
    //     }

    //     const li = document.createElement("li");
    //     li.innerHTML = `<span>${taskValue} </span>
    //     <button class="delete-btn">Delete task</button>`;

    //     document.getElementById("ToDoList").appendChild(li);


    // }

    // function handleListClick(e)
    // {
    //     if(e.target.className === "delete-btn")
    //     {
    //         e.target.parentElement.remove();
    //     }
    // }
    // return(
    //     <div id="form">
    //         <h1>ToDo List Handler</h1>
    //         <form onSubmit={handleSubmit}>
    //             <input type="text" name="task" placeholder="Enter your task"></input>
    //             <button type="submit" >Add task</button>
    //         </form>

    //         <ul id="ToDoList" onClick={handleListClick}></ul>
    //     </div>
    // );


    //Rendring using state

    const [task, setTask] = useState("");//to hold current task
    const [tasks, setTasks] = useState([]);// to hold all tasks in array
    function handleSubmit(e)
    {
        e.preventDefault();
        if(task === "")
        {
            alert(`Cannot add empty task.`);
            return;
        }
        setTasks( [...tasks,task]);
        setTask("");
    }
    return(
        <div id="form">
             <h1>ToDo List Handler</h1>
             <form onSubmit={handleSubmit}>

                 <input type="text" placeholder="Enter your task" value={task}
                 onChange={(e)=>{setTask(e.target.value)}}></input>
                 <button type="submit" >Add task</button>
             </form>

             <ul>
                {
                    tasks.map((element,index) => (
                        <li key={index}>
                            <span>{element}</span>
                            <button onClick={() => {
                                setTasks(tasks.filter((_,ind) => ind !== index));
                            }}>Delete</button>
                        </li>
                    ))
                }
             </ul>
         </div>

    )
}