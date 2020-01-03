import React from 'react';
import './App.css';
import Person from './components/Person';
import Task from './Task2/taskComponents/Task';




function App() {
  return (
    <div className="App">
      <h1>REACT UDEMY COURSE</h1>
      <Person />

      <hr/>
      <h1>Task 2 of module: Lists and Conditionals </h1>
      <Task />
    </div>
  );
}

export default App;
