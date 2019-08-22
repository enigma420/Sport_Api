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
import EditTeam from "./components/Team/EditTeam";
import AddEvent from "./components/EventBoard/Events/AddEvent";
import EventBoard from "./components/EventBoard/EventBoard"
import UpdateEvent from "./components/EventBoard/Events/UpdateEvent";
import Sidebar from "./components/Layout/Sidebar";

function App() {
  return (
   <Provider store={store}>
      <Router>
          <div className="App">
              <Header/>
              <Sidebar/>
              <Route exact path="/dashboard" component={Dashboard}/>
              <Route exact path="/createTeam" component={CreateTeam}/>
              <Route exact path="/editTeam/:id" component={EditTeam}/>
              <Route exact path="/eventBoard/:id" component={EventBoard}/>
              <Route exact path="/addEvent/:id" component={AddEvent}/>
              <Route exact path="/updateEvent/:eventslog_id/:pt_id" component={UpdateEvent}/>
              <Footer/>
          </div>
      </Router>
   </Provider>
  );
}

export default App;
