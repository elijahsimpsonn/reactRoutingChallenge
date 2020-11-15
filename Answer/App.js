import './App.css';
import About from './About'
import Nav from './Nav'
import Shop from './Shop'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'  //the as keyword just lets us rename for ease of use, not required

function App() {
  return (
    <Router>
    <div className="App">
        <Nav />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        </Switch>
    </div>
    </Router> 
  );
}


function Home() {
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    )
}


export default App;
