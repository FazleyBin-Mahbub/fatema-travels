import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/NotFound/NotFound";
import MyOrders from "./Components/MyOrders/MyOrders";
import Login from "./Components/Login/Login";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AddOffer from "./Components/AddOffer/AddOffer";
import PackageDetails from "./Components/PackageDetails/PackageDetails";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            {/* default route */}
            <Route exact path="/">
              <Home></Home>
            </Route>
            {/* home route */}
            <Route exact path="/home">
              <Home></Home>
            </Route>
            {/* my orders  */}

            <PrivateRoute exact path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>

            <Route exact path="/addoffer">
              <AddOffer></AddOffer>
            </Route>
            <Route exact path="/details/:_id">
              <PackageDetails></PackageDetails>
            </Route>
            {/* login route */}
            <Route exact path="/login">
              <Login></Login>
            </Route>
            {/* about route */}
            <Route exact path="/about">
              <About></About>
            </Route>
            {/* contact route */}
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            {/* if note page found */}
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
