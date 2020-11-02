import { Route, useHistory } from "react-router-dom";
import "./App.css";
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react'
import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import Protected from "./components/pages/Protected";


function App() {
  const history = useHistory();
  const onAuthRequired = () => {
    history.push('/login')
  }

  
  return (
    <Security issuer='https://dev-8973713.okta.com/oauth2/default'
                  clientId='0oagl9xxXNwDaMoWZ5d5'
                  redirectUri={window.location.origin + '/login/callback'}
                  onAuthRequired={onAuthRequired} >

      <div className="App">
        <NavBar />
        <Route exact path='/' component={Home} />
          <SecureRoute path='/protected' component={Protected} />
          <Route exact path='/login' render={() => <Login baseUrl='https://dev-8973713.okta.com' />} />
          <Route path='/login/callback' component={LoginCallback} />
      </div>
      </Security>
  );
}

export default App;
