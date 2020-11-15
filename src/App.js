import './App.css';
import About from './About'
import Nav from './Nav'
import Shop from './Shop'

function App() {
  return (
    <div className="App">
        <Nav />
        <Home />
        <About />
        <Shop />
    </div>
  );
}

function Home() {
    return(
        <h1>Home</h1>
    )
}

export default App;
