import Nav from './Components/Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Simple() {
  return (
    <Router>
      <h1>Simple</h1>
      <Nav />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default Simple;
