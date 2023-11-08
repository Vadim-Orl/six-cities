import React from "react";
// import ReactDOM from 'react-dom';
// import ReactDOM, { render } from 'react-dom';
import App from "./components/app/app";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container!);

const Setting = {
    countPlaceCard2: 6,
};

root.render(
    <React.StrictMode>
        <App
            countPlaceCard = {Setting.countPlaceCard2}
        />
    </React.StrictMode>
);
