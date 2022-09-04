import Counter from './component/counter'
import store from './redux/store';
import CounterContainer from './component/react-redux-counter/CounterContainer';

function App() {
  return (
    <div className="App">
      <Counter />
      <CounterContainer store={store}/>
    </div>
  );
}

export default App;
