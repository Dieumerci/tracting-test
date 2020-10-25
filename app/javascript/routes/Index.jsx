import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/home/Home";
import Navbar from  "../components/partials/Navbar";

export default (
    <BrowserRouter>
        <Navbar/>
        <div className="mt-4">
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </div>
    </BrowserRouter>
);