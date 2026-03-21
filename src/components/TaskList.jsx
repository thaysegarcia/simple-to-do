export default function TaskList({tasks, toggleTask, editTask, deleteTask}) {

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