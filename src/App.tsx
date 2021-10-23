import React from 'react';
import './App.scss';
import {
  // RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from 'recoil';

const textState = atom({
  key: 'textState',
  default: new Date() + ''
});

const charCountState = selector({
  key: 'charCountState',
  get: ({get}) => {
    const text = get(textState);
    return text.length;
  }
});

function App() {
  const [text, setText] = useRecoilState(textState);
  const count = useRecoilValue(charCountState);
  setInterval(x => {
    setText(new Date() + '');
  }, 1000)
  return (
    <div className="App">
      {text} {count}
    </div>
  );
}

export default App;
