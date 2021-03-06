import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import KOI from './pages/Koi';
import Ramadhan from './pages/Ramadhan';

class PrivateRoute extends Component {
  render() {
    return (
      < div >
        {
          localStorage.getItem("auth") ?
            this.props.children
            : <Redirect to="/signin" />
        }
      </div >
    )
  }
}
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <PrivateRoute>
            <Route path="/ramadhan">
              <Ramadhan />
            </Route>
            <Route path="/koi">
              <KOI />
            </Route>
          </PrivateRoute>
        </Switch>
      </Router>
    )
  }
}
