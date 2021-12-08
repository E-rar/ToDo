import React from 'react';
import logo from './logo.svg';
import ToDo from './components/ToDo/ToDoItem'
import './App.css';

function App() {
  return (
    <div className="App">
      <ToDo content="Learn Typescript" check={true} />
      <ToDo content="schlafen" check={false} />
    </div>
  );
}

export default App;
