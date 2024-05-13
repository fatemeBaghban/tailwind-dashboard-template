import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import CustomThemeProvider from "./utils/ThemeContext";
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <CustomThemeProvider>
        {/* <ThemeProvider> */}
          <App />
        {/* </ThemeProvider> */}
      </CustomThemeProvider>
    </Router>
  </React.StrictMode>
);
