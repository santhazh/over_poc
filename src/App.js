import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Router, Route } from 'react-router-dom';
//import { connect } from 'react-redux';
import { PrivateRoute } from './components';
import { HomePage } from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';
import { createBrowserHistory } from 'history';

import AddProductForm from './containerwrap/AddProductForm';
import ProductList from './containerwrap/ProductList';

const history = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <div>
          <Router history={history}>
            <div>
                <PrivateRoute exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path='/add-product' component={AddProductForm} />
				        <Route path='/product-list' component={ProductList} />
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
