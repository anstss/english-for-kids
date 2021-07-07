import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";
import {EnglishService} from "./services/EnglishService";
import {EnglishServiceContext} from "./components/english-service-context/english-service-context";
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter as Router} from "react-router-dom";
import {ROUTER_BASENAME} from "./shared/constants";

const englishService = new EnglishService();

englishService.setCategoriesToState();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <EnglishServiceContext.Provider value={englishService}>
        <Router basename={ROUTER_BASENAME}>
          <App/>
        </Router>
      </EnglishServiceContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
