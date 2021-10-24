import react from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ContactUs from './pages/ContactUs';
import Book from './pages/Book';
import Bookings from './pages/Bookings';
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} /> 
         <Route exact path="/register" component={SignUp} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/book-a-session" component={Book} />
        <Route exact path="/see-all-sessions" component={Bookings} />
        <Route component={NotFound} />
      </Switch>

    </Router>

  )
}

export default App
