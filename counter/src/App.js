import React from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {

  //set initial count prop to 5
  return (
  <div className="App">
    <Counter count={5}/>
  </div>
  )
}

export default App;
