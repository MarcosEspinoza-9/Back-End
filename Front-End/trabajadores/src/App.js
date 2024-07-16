import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Trabajadores from './components/Trabajadores';
import Navegacion from './components/Navegacion';
import Slider from './components/Slider';


function App() {
  return (
    <div className="App" >
      <Navegacion/>
      <Slider/>
    </div>
  );
}

export default App;
