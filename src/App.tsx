import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {Solve} from "./Example/Solve";

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Solve</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/profiles">
                        Profiles
                    </Route>
                    <Route path="/">
                        <Solve/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
