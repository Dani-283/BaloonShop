import "./App.css";
import home from "./pages/home";
import gallery from "./pages/gallery";
import contact from "./pages/contact";

import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";

import Header from "./components/Header";

export class App extends Component {
  render() {
    return (
      <HashRouter>
        <Header />
        <div className="container">
          <Route exact path="/" component={home} />
          <Route path="/gallery" component={gallery} />
          <Route path="/contact" component={contact} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
