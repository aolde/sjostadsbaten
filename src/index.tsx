import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as mixpanel from "mixpanel-browser";
// import reportWebVitals from "./reportWebVitals";

mixpanel.init(
    "a3672ad650ae8873139d57e3a108d00c",
    { api_host: "https://api-eu.mixpanel.com" },
    ""
);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

mixpanel.track("Page view", { pageName: "Start" });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
