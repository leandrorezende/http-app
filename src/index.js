import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import loggger from "./services/logService";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

loggger.init();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
