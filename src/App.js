import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import components

import NavBar from './components/layouts/NavBar';
import ProductList from './components/pages/ProductList';
import Details from './components/pages/Details';
import Cart from './components/Cart';
import Default from './components/pages/Default';
import Modal from './components/pages/modal';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route component={Default}/> 
      </Switch>
      <Modal/>

    </React.Fragment>
  );
}

export default App;
