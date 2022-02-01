import { Counter } from './components/Counter';
import { CounterBy } from './components/CounterBy';


function App() {
  return (
    <>
    
    <h1>Holi</h1>
    
    <hr />

    <Counter initialValue={15}/>
    <CounterBy/>
    </>
  );
}

export default App;
