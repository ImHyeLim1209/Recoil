import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <span id="value">count</span>
      <div class="button-container">
        <button class="btn-decrease">decrease</button>
        <button class="btn-increase">increase</button>
        <button class="btn-reset">reset</button>
      </div>
    </div>
  );
}
export default App;
