import './App.css';
import LoginPage from './components/LoginPage'
import SignUp from './components/SignUp'
import Error from './components/Error'
import Home from './components/Home'
import { Route, Switch } from 'react-router-dom';
import firebase from 'firebase/app';  
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import { useHistory } from 'react-router-dom'

function App() {
  const auth  = firebase.auth();
  const database = firebase.database();
  const storage =  firebase.storage();
  let history =  useHistory();


  

  const onAuth = (users) => {
    auth.signInWithEmailAndPassword(users.email, users.password)
    .then((userCredential) => {
      history.push('/home');
    })
    .catch((error) => {
      //TODO: Need To Display error message 
      console.log(error.message);
    });
    return true;

  }



  return (
    <div className="App">
         <Switch>
            <Route exact path='/'  component={() =>   <LoginPage  onAuth={onAuth}  />}/>
            <Route  path='/signUp'  component={() => <SignUp auth={auth} database={database} storage={storage}   />} />
            <Route  path="/home" component={Home} />
            <Route component={Error}/>
           </Switch>

    </div>
    
  );
}

export default App;
