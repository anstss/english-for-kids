import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";
import {EnglishService} from "./services/EnglishService";
import {EnglishServiceContext} from "./components/english-service-context/english-service-context";
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter as Router} from "react-router-dom";

const englishService = new EnglishService();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <EnglishServiceContext.Provider value={englishService}>
        <Router>
          <App/>
        </Router>
      </EnglishServiceContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
