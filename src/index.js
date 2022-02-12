import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import RecipeApp from "./RecipeApp";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tab, Tabs, Container } from "react-bootstrap";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <RecipeApp /> */}
    <Container>
      <Tabs
        defaultActiveKey="pantry"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="pantry" title="Pantry">
          <App />
        </Tab>
        <Tab eventKey="recipe" title="Recipe">
          <RecipeApp />
        </Tab>
      </Tabs>
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
