import './App.css';
import React from 'react';
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';



function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
   </div>
  );
}

export default App;
