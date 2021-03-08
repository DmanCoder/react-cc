import { useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTasks from './components/AddTasks';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Sunday',
      reminder: true,
    },
    {
      id: 2,
      text: 'Talk to Benny about the issue',
      day: 'Wednesday',
      reminder: true,
    },
    {
      id: 3,
      text: 'Fly to the moon',
      day: 'Tuesday',
      reminder: true,
    },
  ]);

  // Add tasks
  const addTask = (task) => {
    console.log(task);
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    console.log(id);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id == id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTasks onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No task to show'
      )}
    </div>
  );
};

export default App;
