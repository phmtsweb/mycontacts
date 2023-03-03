import { Switch, Route } from 'react-router-dom';
import { ContactDetails } from './pages/ContactDetails';
import { Home } from './pages/Home';

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path={['/contactdetails/:id', '/contactdetails']} component={ContactDetails} />
    </Switch>
  );
}
