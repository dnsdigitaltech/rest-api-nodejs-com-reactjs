import React from "react";
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import Dashboard from "./Dashboard";
import RoutesAll from "./routes";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <div className="header">
          <NavLink exact activeClassName="active" to="/">Home</NavLink>
          <NavLink activeClassName="active" to="/login">Login <small>Acesso sem tokem apenas</small></NavLink>
          <NavLink activeClassName="active" to="/dashboard">Dashboard <small>Acesso com tokem apenas</small></NavLink>
        </div>
        <div className="content">
          <Routes>
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/dashboard" component={Dashboard}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
