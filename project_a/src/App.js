import logo from './logo.svg';
import './App.css';
// import Counter from './Counter';
import CounterTs from './components/counter/index';
import { Wrapper } from './components/wrapper';

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <CounterTs /> */}
      <Wrapper/>
    </div>
  );
}

export default App;