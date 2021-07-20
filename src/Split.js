import * as React from 'react';
import Nav from './Components/Nav';
// import Home from './Pages/Home';
// import About from './Pages/About';
// import Contact from './Pages/Contact';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Home = React.lazy(() => import('./Pages/Home'));
const About = React.lazy(() => import('./Pages/About'));
const Contact = React.lazy(() => import('./Pages/Contact'));

function Split() {
  return (
    <Router>
      <h1>Split</h1>
      <Nav />

      <Switch>
        <React.Suspense fallback={<p>Loading</p>}>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </React.Suspense>
      </Switch>
    </Router>
  );
}

export default Split;
