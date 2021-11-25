import react from 'react';
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
const queryClient = new QueryClient();

function App() {
  const isAuthenticated = useStore(state => state.isAuthenticated)
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
