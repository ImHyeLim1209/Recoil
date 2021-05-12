import React from 'react';
import { atom, useResetRecoilState, useRecoilValue, useSetRecoilState, selector } from 'recoil';
import './App.css';

const countState = atom({
  key: 'countState',
  default: 0
});

const countStrState = selector({
  key: 'countStrState',
  get: ({ get }) => {
    const value = get(countState);
    return `현재 값은 ${value} 입니다.`;
  },
  set: ({ set }) => {
    set(countState, 100);
  }
});

function App() {
  const count = useRecoilValue(countState);
  const setCount = useSetRecoilState(countState);
  const resetCount = useResetRecoilState(countState);

  const countStr = useRecoilValue(countStrState);
  const setCountHundred = useSetRecoilState(countStrState);

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
      <div class="strValue" onClick={setCountHundred}>{countStr}</div>
    </div>
  );
}
export default App;




