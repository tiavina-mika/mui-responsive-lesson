import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider
} from "@mui/material/styles";
import Home from "./Home";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50%"
        }
      }
    }
  }
});

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
