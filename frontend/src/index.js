import react from "react";
import reactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import {BrowserRouter} from "react-router-dom";
import Routings from "./Routings";

reactDOM.render(
  <>
  <BrowserRouter>
  <Routings></Routings>
  </BrowserRouter>
  </>,
  document.getElementById("root")
);
