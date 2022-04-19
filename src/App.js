import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListCustomerComponent from './components/ListCustomerComponent';
import HeaderComponent from './components/HeaderComponent';
import AddCustomerComponent from './components/AddCustomerComponent';
import ViewCustomerComponent from './components/ViewCustomerComponent';
import ErrorComponent from './components/ErrorComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
          <div className = 'container'>
            <Switch>
              <Route path = "/customers" component = {ListCustomerComponent}></Route>
              <Route path = "/error" component = {ErrorComponent}></Route>
              <Route path = "/add-customer/:id" component = {AddCustomerComponent}></Route>
              <Route path = "/view-customer/:id" component = {ViewCustomerComponent}></Route>
              <Route path = "/" exact component = {ListCustomerComponent}></Route>
            </Switch>
          </div>
      </Router>
    </div>
   
  );
}

export default App;
