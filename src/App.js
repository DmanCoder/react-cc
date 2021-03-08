import { useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
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
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No task to show'
      )}
    </div>
  );
};

export default App;
