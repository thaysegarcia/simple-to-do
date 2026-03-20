function Container( {children} ) {
  return <div className="flex flex-col gap-4 max-w-lg mx-auto my-10 p-10 rounded-2xl shadow-lg"> {children} </div>
}

function Header() {
  return (
    <div className="flex justify-between py-4">
      <p>19/03/2026</p>
      <span>LOGO</span>
    </div>
  );
}
 
function TaskList({tasks}) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.description}>
          {task.ativa 
            ? task.description
            : <span style={{textDecoration:'line-through'}}>{task.description}</span>}
        </li>
      ))}
    </ul>
  );
}

const TASKS = [
  {description: "Lavar a louça", category: "Casa", ativa: false},
  {description: "Organizar a sala", category: "Casa", ativa: true},
  {description: "Enviar os relatórios", category: "trabalho", ativa: false},
  {description: "Ler até o cap 5.", category: "Hobbies", ativa: false},
  {description: "Confirmar reunião", category: "trabalho", ativa: true}
]


export default function App() {
  return (<>
    <Container>
      <Header />
     
      <TaskList tasks={TASKS} />
     
    </Container>
  </>);
}