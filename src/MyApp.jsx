import React from 'react';
import "./index.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Switch, Route , Redirect } from "react-router-dom"
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from "./About/About"
import Service from "./Service/Service"
import Contact from "./Contact/Contact"


const MyApp = () => {
    return (
        <>
             <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/About" component={About}></Route>
        <Route path="/Service" component={Service}></Route>
        <Route path="/Contact" component={Contact}></Route>
        <Redirect to="/"></Redirect>
        
      </Switch>
            </>
    )
}

export default MyApp;