import React from "react";
import ReactDOM from "react-dom/client";
import "aos/dist/aos.css";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Provider} from "react-redux";
import App from "./App";
import store from "./features/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
          <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
