import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import MenuContext from "./Context/MenuContext";
import { GlobalSearchProvider } from "./Context/GlobalSearchContext";
import WindowContext from "./Context/WindowContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalSearchProvider>
  <React.StrictMode>
    <WindowContext>
      <MenuContext>
        <Router>
          <App />
        </Router>
      </MenuContext>
    </WindowContext>
    </React.StrictMode>
  </GlobalSearchProvider>
    
);
