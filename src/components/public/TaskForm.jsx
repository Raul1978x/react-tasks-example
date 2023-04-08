import { useState, useContext } from "react";
import { TaskContext } from "./../../context/TaskContext";

const TaskForm = () => {
  const [title, settitle] = useState("");
  const [description, setDescription] = useState("");

  const {createTask}  = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setDescription("");
    settitle("");
  };
  return (
    <form onSubmit={handleSubmit} className="bg-zinc-600 p-10 mb-3 rounded-md">
      <div>
        <h3 className="text-2xl text-zinc-900 text font-bold text-center mb-3">Ingrese tareas</h3>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => settitle(e.target.value)}
          value={title}
          autoFocus
          className="w-full my-2 p-2 "
        />
      </div>
      <textarea
        placeholder="Escribe la descripción"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="w-full my-2 p-2"
      ></textarea>
      <div>
        <button className="bg-indigo-800 text-white p-2 rounded-sm hover:bg-indigo-950 float-right ">Guardar</button>
      </div>
    </form>
  );
};

export default TaskForm;
