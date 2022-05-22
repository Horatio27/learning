import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react"


function App() {
  const[tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Coke'
    }, 
    {
        id: 2,
        text: 'Pepsi'
    }, 
    {
        id: 3,
        text: 'Root Beer'
    }
])

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
