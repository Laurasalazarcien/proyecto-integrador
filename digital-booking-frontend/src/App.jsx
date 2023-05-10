import "./App.scss";
import Example from './components/Example';

const namespace = "app";

function App() {
  return (
    <div className={namespace}>
      <h1>App</h1>
      <Example />
    </div>
  );
}

export default App;
