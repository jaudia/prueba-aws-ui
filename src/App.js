import logo from './logo.svg';
import './App.css';

function App() {
  alert(process.env.REACT_APP_OTRA_VARIABLE);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Prueba de react - aws - 2</p>
      </header>
    </div>
  );
}

export default App;


