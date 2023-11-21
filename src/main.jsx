import { StrictMode } from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./pages/App/App";
import {BrowserRouter as Router} from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  rootElement
);
