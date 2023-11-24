import React from "react";
import {createStore} from 'redux'
import { reducer } from "./store/reducer";
import { Provider } from "react-redux";

import App from "./components/app/app";
import { createRoot } from "react-dom/client";
import { offersMocks } from "./mocks/offers";
import { composeWithDevTools } from "redux-devtools-extension";


const container = document.getElementById("root");
const root = createRoot(container!);

const store = createStore(
  reducer,
  composeWithDevTools(),
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        offers = {offersMocks}
      />
    </Provider>
  </React.StrictMode>
);
