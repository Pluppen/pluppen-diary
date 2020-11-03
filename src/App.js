import {React, useEffect, useState} from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from "./Navbar.js";
import Welcome from "./Welcome.js";
import Diary from "./Diary.js";

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route path="/diary">
                        <Diary />
                    </Route>
                    <Route path="/history">
                    </Route>
                    <Route path="/">
                        <Welcome />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App

