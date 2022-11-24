import React from "react";
import Main from "./pages/main";
import { CssBaseline } from "@mui/material";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <CssBaseline />
      <GlobalStyle />
      <Main />
    </>
  );
}

export default App;
