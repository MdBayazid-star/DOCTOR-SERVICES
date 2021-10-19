import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import "./App.css";
import Home from "./Pages/Homes/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import About from "./Pages/About/About";
import Error from "./Pages/Error/Error";
import Signup from "./Pages/Registration/Signup/Signup";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./Pages/Registration/Login/PrivateRoute/PrivateRoute";
import ServicesDetails from "./Pages/Homes/Home/ServiceDetails/ServicesDetails";
import LoginFrom from "./Pages/Registration/Login/Login/LoginFrom/LoginFrom";
import Blog from "./Pages/Blogs/Blog/Blog";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/Signup">
              <Signup></Signup>
            </Route>
            <PrivateRoute path="/service/:key">
              <ServicesDetails></ServicesDetails>
            </PrivateRoute>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/login">
              <LoginFrom></LoginFrom>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
