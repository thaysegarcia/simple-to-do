import { useState } from "react";

import Container from "./components/Container";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

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
      <Header/>
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