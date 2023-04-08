import TaskList from "./components/public/TaskList";
import TaskForm from "./components/public/TaskForm";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto " >
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}
export default App;
