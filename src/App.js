import logo from './logo.png';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <img src={logo} alt="Socially Accessible Denver in Black text with an orange skyline and small black wheelchair icon"/>
      
    </div>
  );
}

export default App;
