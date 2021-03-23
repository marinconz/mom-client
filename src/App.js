import Login from './containers/login'
import UserActions from './containers/actions'
import SignupForm from './containers/registration'
import Server from './containers/server'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/queues'>
          <UserActions />
        </Route>
        <Route path='/signup'>
          <SignupForm />
        </Route>
        <Route path='/server'>
          <Server />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
