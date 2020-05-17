import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import getRoutes from './shared/routes';
import store from "./store";
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          {getRoutes()}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
