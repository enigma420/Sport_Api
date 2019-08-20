import React, {Component} from 'react';
import './App.css';
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
import CreateTeam from "./components/Team/CreateTeam";
import { BrowserRouter as Router,Route } from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";

function App() {
  return (
   <Provider store={store}>
      <Router>
          <div className="App">
              <Header/>
              <Route exact path="/dashboard" component={Dashboard}/>
              <Route exact path="/createTeam" component={CreateTeam}/>
              <Footer/>
          </div>
      </Router>
   </Provider>
  );
}

export default App;
