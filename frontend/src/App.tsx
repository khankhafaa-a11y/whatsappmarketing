import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CampaignBuilder from './pages/CampaignBuilder';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/campaign-builder" component={CampaignBuilder} />
      </Switch>
    </Router>
  );
};

export default App;