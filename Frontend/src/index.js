import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import App from "./App";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyles";
import registerServiceWorker from "../public/service-worker-register";

const queryClient = new QueryClient();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </ThemeProvider>,
  document.getElementById("root"),
);

registerServiceWorker();
