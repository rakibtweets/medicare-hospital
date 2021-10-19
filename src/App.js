import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import AuthProvider from './Context/AuthProvider';
import AllServices from './Components/AllServices/AllServices';
import AllDoctors from './Components/AllDoctors/AllDoctors';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import DoctorDetails from './Components/DoctorDetails/DoctorDetails';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/doctors">
              <AllDoctors />
            </Route>
            <PrivateRoute path="/doctorDetails/:id">
              <DoctorDetails />
            </PrivateRoute>
            <Route path="/services">
              <AllServices />
            </Route>
            <PrivateRoute path="/serviceDetails/:id">
              <ServiceDetails />
            </PrivateRoute>
            <Route path="/about">
              <About />
            </Route>
            <PrivateRoute path="/contact">
              <Contact />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
