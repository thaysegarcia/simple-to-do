import { useState } from "react";

function Container( {children} ) {
  return <div className="flex flex-col gap-4 max-w-lg mx-auto my-10 p-10 rounded-2xl shadow-lg"> {children} </div>
}

function Header() {
  return (
    <div className="flex justify-between py-4">
      <p>{new Date().toLocaleDateString()}</p>
      <span>Meu To-Do</span>
    </div>
  );
}
 
function TaskList({tasks, toggleTask}) {
  
  
  return (
    <ul>
      {tasks.map(task => (
        <li className="cursor-pointer" key={task.description} onClick={() => toggleTask(task)}>
          {task.active 
            ? task.description
            : <span className="line-through">{task.description}</span>}
        </li>
      ))}
    </ul>
  );
}

function TaskInput( {tasks, setTasks} ) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    const newTask = {
      id: Date.now(),
      description: text,
      active: true
    };

    setTasks([...tasks, newTask]);
    setText("");
  }

  return (
    <div>
      <input value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Digite uma tarefa..."
      />
      <button onClick={handleAdd}>+</button>
    </div>
  );
}

/* const TASKS = [
  {description: "Lavar a louça", category: "Casa", ativa: false},
  {description: "Organizar a sala", category: "Casa", ativa: true},
  {description: "Enviar os relatórios", category: "trabalho", ativa: false},
  {description: "Ler até o cap 5.", category: "Hobbies", ativa: false},
  {description: "Confirmar reunião", category: "trabalho", ativa: true}
]

 */
export default function App() {
  const [tasks, setTasks] = useState([]);

  const handleClick = clickedTask => {
    const updatedTask = tasks.map(task => 
      task === clickedTask ? {...task, active: !task.active} : task
    );

    setTasks(updatedTask);
  }

  return (<>
    <Container>
      <Header />
     
      <TaskList tasks={tasks} toggleTask={handleClick}/>
      <TaskInput tasks={tasks} setTasks={setTasks} />
     
    </Container>
  </>);
}