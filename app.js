import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Fragment from './Fragment';
import FragmentForm from './FragmentForm';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/fragment" component={Fragment} />
        <Route path="/fragment_form" component={FragmentForm} />
        <Route path="/" component={Fragment} /> {/* Redirection par défaut */}
      </Switch>
    </Router>
  );
};

export default App;