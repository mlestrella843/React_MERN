import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { MiSegundo } from './MiSegundo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <hr/>
        <p>
          Welcome to React Course Practice!
        </p>
        {/* Cargar mi primer componente */} 
        <div> 
            <hr/>    
            <MiComponente />
            <hr/>     
            <MiSegundo />            
        </div>
      </header>
    </div>
  );
}
export default App;
