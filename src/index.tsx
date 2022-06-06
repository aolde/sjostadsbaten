import { createRoot } from "react-dom/client";
import App from "./App";
import * as mixpanel from "mixpanel-browser";
import "./index.css";

mixpanel.init(
  "a3672ad650ae8873139d57e3a108d00c",
  { api_host: "https://api-eu.mixpanel.com" },
  ""
);

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App />);

mixpanel.track("Page view", { pageName: "Start" });
