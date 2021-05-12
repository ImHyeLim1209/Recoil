import React from 'react';
import { atom, useRecoilState, useResetRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import './App.css';

const countState = atom({
  key: 'countState',
  default: 0
});


function App() {
  //const [count, setCount] = useRecoilState(countState);
  const count = useRecoilValue(countState);
  const setCount = useSetRecoilState(countState);
  const resetCount = useResetRecoilState(countState);

  const increaseCount = () => {
    setCount((preCount) => preCount + 1);
  };
  const decreaseCount = () => {
    setCount((preCount) => preCount - 1);
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <span id="value">{count}</span>
      <div class="button-container">
        <button class="btn-increase" onClick={increaseCount}>increase</button>
        <button class="btn-decrease" onClick={decreaseCount}>decrease</button>
        <button class="btn-reset" onClick={resetCount}>reset</button>
      </div>
    </div>
  );
}
export default App;




