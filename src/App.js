import React, { useState } from "react";
import "./assets/App.css";
import Main from "./components/Main";
import EditCard from "./components/EditCard";
import importedData from "./data.json";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  localStorage.setItem("data", JSON.stringify(importedData));

  return (
    <div>
      <div className="Header"></div>
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/edit" component={EditCard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
