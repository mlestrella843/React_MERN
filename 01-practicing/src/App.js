import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import { MiSegundo } from './MiSegundo';
import MiTercer from './MiTercer';

function App() {

  const ficha_medica={
   altura: "187 cm",
   grupo: "O+",
   estado: "Bueno",
   alergias: "Ninguna"
  }


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
            <hr/>
            <MiTercer 
            nombre="Maria Luisa" 
            apellido="Estrella"
            ficha={ficha_medica}
            />         
        </div>
      </header>
    </div>
  );
}
export default App;
