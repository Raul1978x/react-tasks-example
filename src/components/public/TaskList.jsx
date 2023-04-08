import TaskCard from "./TaskCard";
import {TaskContext } from "../../context/TaskContext";
import {useContext} from 'react'

const TaskList = () => {
  const {tasks} = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1 className=" container  bg-slate-800 text-center p-3 rounded-lg text-2xl text-yellow-700">No hay tareas aún!!!</h1>;
  }


  return (
    <div className="grid grid-cols-2 gap-2 ">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};
export default TaskList;
