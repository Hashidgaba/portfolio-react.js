import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Services from './components/Services';


const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/Services" component={Services} />     
      </Switch>
    </Router>
  );
};

export default AppRouter;