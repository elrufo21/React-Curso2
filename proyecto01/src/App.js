import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';

function App() {
  const objeto={id:1,
    nombre:"Ruben Vasquez",
    edad:26,
    email:"elrufo21"}
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msj="Hola mundo" />
          <hr />
          <Propiedades 
          esDia={false}
          arreglo={[1,2,3,4]}
          objeto={objeto}
          funcion={num=>num*num} 
          numero={1}
          componente={<Componente msj="Esto es un componente" /> } />
          <hr/>
          <Estado />
        </section>
      </header>

    </div>
  );
}

export default App;
