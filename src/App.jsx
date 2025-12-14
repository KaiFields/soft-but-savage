import './App.css';
import logo from './assets/logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Soft But Savage logo" />
        <div className="brand">Soft But Savage</div>
        <div className="tagline">A journal‑styled sanctuary for reclaiming soft power</div>
        <button className="cta">Begin Your Soft Rebirth</button>
        <div className="small">Designed with warmth, ritual, and sisterhood.</div>
      </header>
    </div>
  );
}

export default App;
