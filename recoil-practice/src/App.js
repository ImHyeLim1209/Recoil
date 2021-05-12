import React from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import './App.css';

const count = atom({
  key: 'countState',
  default: 0
});



function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>Counter</h1>
        <span id="value"></span>
        <div class="button-container">
          <button class="btn-decrease">decrease</button>
          <button class="btn-increase">increase</button>
          <button class="btn-reset">reset</button>
        </div>
      </div>
    </RecoilRoot>
  );
}
export default App;
