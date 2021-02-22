import './App.css';
import LoginPage from './components/LoginPage'
import SignUp from './components/SignUp'
import Error from './components/Error'
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
         <Switch>
            <Route exact path='/'  component={LoginPage}/>
            <Route path='/signUp'  component={SignUp} />
            <Route component={Error}/>
           </Switch>

    </div>
    
  );
}

export default App;
