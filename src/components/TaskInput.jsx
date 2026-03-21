import { useState } from "react";

export default function TaskInput( {tasks, setTasks} ) {
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
