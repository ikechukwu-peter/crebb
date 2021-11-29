import react from 'react';
import jwt_decode from 'jwt-decode'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from 'react-query';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ContactUs from './pages/ContactUs';
import Book from './pages/Book';
import Bookings from './pages/Bookings';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsandConditions from './pages/TermsandConditions';
import NotFound from './pages/NotFound'
import ProtectedRoutes from './utilities/ProtectedRoutes';
import useStore from './store';
import setAuthToken from './utilities/SetAuthToken';



function App() {
  const queryClient = new QueryClient();
  queryClient.invalidateQueries('session', { exact: true })
  const isAuthenticated = useStore(state => state.isAuthenticated)
  const loginAuth = useStore(state => state.login);
  const logoutAuth = useStore(state => state.logout);

  if (localStorage.getItem('token')) {
    //set auth token header auth
    setAuthToken(localStorage.token);
    //decode jwt
    const decoded = jwt_decode(localStorage.token);

    //set isAuthenticated
    loginAuth()

    //Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      //logOut
      logoutAuth
      localStorage.clear('token');

      //Redirect to login
      window.location.href = "/login";
    }
  }
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/contact-us" component={ContactUs} />
          <ProtectedRoutes isAuthenticated={isAuthenticated}
            exact path="/see-all-sessions"
            component={Bookings} />

          <ProtectedRoutes isAuthenticated={isAuthenticated}
            exact path="/book-a-session"
            component={Book} />


          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/terms-conditions" component={TermsandConditions} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </QueryClientProvider>

  )
}

export default App
