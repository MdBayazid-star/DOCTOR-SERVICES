import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import "./App.css";
import Home from "./Pages/Homes/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import About from "./Pages/About/About";
import Error from "./Pages/Error/Error";
function App() {
  return (
    <div className="App">
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
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
