import React, {Component , Suspense} from 'react';
import './App.css';
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
import CreateTeam from "./components/Team/CreateTeam";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import EditTeam from "./components/Team/EditTeam";
import AddEvent from "./components/EventBoard/Events/AddEvent";
import EventBoard from "./components/EventBoard/EventBoard"
import UpdateEvent from "./components/EventBoard/Events/UpdateEvent";
import Sidebar from "./components/Layout/Sidebar";
import Landing from "./components/Layout/Landing";
import Register from "./components/UserManagement/Register";
import Login from "./components/UserManagement/Login";
import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import {SET_CURRENT_USER} from "./actions/types";
import {logout} from "./actions/securityActions"
import Profile from "./components/UserManagement/Profile";
import WeatherApi from "./components/API-additives/Weather/WeatherApi";
import Contact from "./components/UserManagement/Contact";
import Gallows from "./games/Gallows";
import Memory from "./games/Memory";
import CountryApi from "./components/API-additives/City/CountryApi";
import TranslateApi from "./components/API-additives/Translate/TranslateApi";
import CurrencyApi from "./components/API-additives/Currency/CurrencyApi";
import FactApi from "./components/API-additives/Facts/FactApi";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import ReactFlagsSelect from 'react-flags-select';

const jwtToken = localStorage.jwtToken;

//JWT

if(jwtToken){
    setJWTToken(jwtToken);
    const decoded_jwtToken = jwt_decode(jwtToken);
    store.dispatch({
        type: SET_CURRENT_USER,
        payload: decoded_jwtToken
    });

    const currentTime = Date.now() / 1000;
    if(decoded_jwtToken.exp < currentTime){
        store.dispatch(logout());
        window.location.href = "/";
    }
}
function MyComponent() {
    return (
        <div/>
    );
}
// use hoc for class based components

const Welcome = withTranslation()(MyComponent);

let languages = () => {

}

// page uses the hook
function Page() {
    const { t, i18n } = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };

    const {country} = ""

    // function onSelectFlag(country){
    //     if(country === "GB"){
    //         changeLanguage('en')
    //     }
    //     if(country === "PL"){
    //         changeLanguage('pl')
    //     }
    //


    // }
    function onSelectFlag(countryLang) {
        if(countryLang === "GB"){
            changeLanguage('en')
        }
        if(countryLang === "PL"){
            changeLanguage('pl')
        }
    }
    function chooseLanguage() {
        return( <ReactFlagsSelect
            className="flag-select"
            countries={["GB","DE","PL"]}
            customLabels={{"GB": " EN","DE": " DE","PL":" PL"}}
            placeholder="Languages:"
            alignOptions="left"
            selectedSize={12}
            optionsSize={12}
            defaultCountry="GB"
            onSelect={onSelectFlag}
        />)
    }
    return (
        <div className="App">
            {chooseLanguage()}
                <Provider store={store}>
                    <Router>
                        <div className="App">

                            <Header/>
                            {
                                //Public Routes
                            }
                            <Route exact path="/" component={Landing} />
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                            <Footer/>
                            {
                                //Private Routes
                            }
                            <Route exact path={["/dashboard","/createTeam","/editTeam/:id","/eventBoard/:id","/addEvent/:id","/updateEvent/:eventslog_id/:pt_id"]} component={Sidebar}/>
                            <Switch>
                                <Route exact path="/weather" component={WeatherApi}/>
                                <Route exact path="/city" component={CountryApi}/>
                                <Route exact path="/translate" component={TranslateApi}/>
                                <Route exact path="/currency" component={CurrencyApi}/>
                                <Route exact path="/facts" component={FactApi}/>
                                <Route exact path="/games" component={Memory}/>
                                {/*<Route exact path="/games/gallows-game" component={Example}/>*/}
                                <Route exact path="/profile" component={Profile}/>
                                <Route exact path="/game" component={Gallows}/>
                                <Route exact path="/contact" component={Contact}/>
                                <Route exact path="/dashboard" component={Dashboard}/>
                                <Route exact path="/createTeam" component={CreateTeam}/>
                                <Route exact path="/editTeam/:id" component={EditTeam}/>
                                <Route exact path="/eventBoard/:id" component={EventBoard}/>
                                <Route exact path="/addEvent/:id" component={AddEvent}/>
                                <Route exact path="/updateEvent/:eventslog_id/:pt_id" component={UpdateEvent}/>
                            </Switch>
                        </div>
                    </Router>
                </Provider>
        </div>
    );
}
const Loader = () => (
    <div className="App">
        <div>loading...</div>
    </div>
);

export default function App() {
  return (
      <Suspense fallback={<Loader />}>
          <Page />
      </Suspense>
  );
}


