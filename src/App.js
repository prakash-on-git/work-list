import { useState, useEffect } from 'react';

import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';
import { Footer } from './components/Footer';

import './App.css';


function App() {

  // adding values in local storage
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("taskList")) || []);
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList))
  
  }, [taskList]);
  // end

  return (
    <div className='app'>
      <Header />
      <AddTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />
      <ShowTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} />
      <Footer />
    </div>
  );
}

export default App;
// video 8.11
// now you can make a build using "npm run build" and then take that folder and put it in netlify
// now we started react router make  a new app "routemate" and work there