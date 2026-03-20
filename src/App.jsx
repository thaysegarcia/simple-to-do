import { useState } from "react";

function Container( {children} ) {
  return <div className="flex flex-col gap-4 max-w-lg mx-auto my-10 p-10 rounded-2xl shadow-lg text-gray-600"> {children} </div>
}

function Header() {
  return (
    <div className="flex justify-between py-4">
      <p>{new Date().toLocaleDateString()}</p>
      <span>Meu To-Do</span>
    </div>
  );
}
 
function TaskList({tasks, toggleTask, editTask, deleteTask}) {

  const handleDelete = (e, id) => {
    e.stopPropagation();
    deleteTask(id);
  };

  const handleEdit = (e, task) => {
    e.stopPropagation();
    const newText = prompt("Editar tarefa:", task.description);
    if (newText) editTask(task.id, newText);
  };
   
  return (
    <ul>
      {tasks.map(task => ( 
        <div key={task.id}>
          <li className="cursor-pointer flex justify-between" onClick={() => toggleTask(task.id)}>
            {task.active 
              ? task.description
              : <span className="line-through">{task.description}</span>}

            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-icon lucide-pencil cursor-pointer w-4" onClick={(e) => handleEdit(e, task)}><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x cursor-pointer w-5" onClick={(e) =>handleDelete(e, task.id)}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>  
            </div>  
          </li>
        </div>
      ))}
    </ul>
  );
}

function TaskInput( {tasks, setTasks} ) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    const newTask = {
      id: Date.now(),
      description: text,
      active: true
    };

    setTasks([...tasks, newTask]);
    setText("");
  }

  const handleKeyDown = e => {
    if (e.key ===  "Enter") {handleAdd()};
  }

  return (
    <div className="flex gap-6">
      <input className="shadow-sm px-2 rounded-sm"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Digite uma tarefa..."
      />
      <button onClick={handleAdd} className="shadow-sm w-10 h-10 rounded-4xl cursor-pointer font-bold text-gray-700">+</button>
    </div>
  );
}

export default function App() {
  const [tasks, setTasks] = useState([]);

  const toggleTask = id => {
    const updatedTask = tasks.map(task => 
      task.id === id ? {...task, active: !task.active} : task
    );

    setTasks(updatedTask);
  }

  const deleteTask = id => {
    const updatedTask = tasks.filter(task => task.id !== id);
    setTasks(updatedTask);
  }

  const editTask = (id, newText) => {
    const updatedTask = tasks.map( task =>
      task.id === id 
        ? {...task, description: newText}
        : task
    );

    setTasks(updatedTask);
  }

  return (<>
    <Container>
      <Header />
      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        editTask={editTask}/>
      <TaskInput
        tasks={tasks}
        setTasks={setTasks} />
    </Container>
  </>);
}