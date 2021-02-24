import './App.css';
import LoginPage from './components/LoginPage'
import SignUp from './components/SignUp'
import Error from './components/Error'
import { Route, Switch } from 'react-router-dom';
import firebase from 'firebase/app';  
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

function App() {
  const auth  = firebase.auth();
  const database = firebase.database();
  const storage =  firebase.storage();
     
  return (
    <div className="App">
         <Switch>
            <Route exact path='/'  component={LoginPage}/>
            <Route path='/signUp'  component={() => <SignUp auth={auth} database={database} storage={storage} />} />
            <Route component={Error}/>
           </Switch>

    </div>
    
  );
}

export default App;
