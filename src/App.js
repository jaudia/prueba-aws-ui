import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [onInit, setOnInit] = useState(true)


  useEffect(() => {

    if (onInit) {

      console.log('el dato de de la url es....');
      console.log(process.env.REACT_APP_BACKEND_URL)
      console.log('fin')



      fetch(`${process.env.REACT_APP_BACKEND_URL}/`)     
      .then(res=>res.json())   
        .then(
          (result) => {
            console.log(result);
            alert(result.msg);
            setOnInit(false);
          }
        )
        .catch(err => {
          console.log(err)
          alert('Hubo un error')
          setOnInit(false);
        })

    }


  }, [onInit])


  
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


