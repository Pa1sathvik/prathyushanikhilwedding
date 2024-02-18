import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/theme";
import 'semantic-ui-css/semantic.min.css'
ReactDOM.render(
  
  <ThemeProvider theme={theme}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
