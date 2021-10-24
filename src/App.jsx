import react from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ContactUs from './pages/ContactUs';


import './App.css'

function App() {
  return (
    <Router>   
        <Switch>
          <Route exact path="/"   component={Home} />   
      
          <Route exact path="/login" component={Login} />
          
          <Route exact path="/register"  component={SignUp}  />    
          <Route exact path="/contact-us"  component={ContactUs}  />      
          
        </Switch>
      
    </Router>

  )
}

export default App
