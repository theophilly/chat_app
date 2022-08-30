import React, { useState, useEffect } from "react";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import "./App.css";

import theme from "./theme";

import Routes from "./routes";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [color, setColor] = useState("red");

  //   const setMessage = () => {
  //     window.postMessage("green");
  //   };

  const reactNativeWebviewListener = (msg) => {
    if (typeof msg.data === "object") return;
    setColor(msg.data);
    // console.log(msg);
  };

  useEffect(() => {
    window.addEventListener("message", reactNativeWebviewListener);

    return () => {
      window.removeEventListener("message", reactNativeWebviewListener);
    };
  }, []);
  return (
    <StyledEngineProvider injectFirst>
      <div
        // onClick={setMessage}
        style={{ width: "100px", height: "100px", background: color }}
      ></div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ScrollToTop />
        <Routes />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
