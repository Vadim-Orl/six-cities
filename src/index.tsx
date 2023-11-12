import React from "react";
import App from "./components/app/app";
import { createRoot } from "react-dom/client";
import { offersMocks } from "./mocks/offers";


const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App
      offers = {offersMocks}
    />
  </React.StrictMode>
);
