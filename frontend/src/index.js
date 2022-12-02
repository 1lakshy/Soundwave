import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CookiesProvider } from "react-cookie";
import App from "./App";
import { store } from "./store/index";
import { Provider } from "react-redux";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <CookiesProvider> */}
      <Provider store={store}>
        <App />
      </Provider>
    {/* </CookiesProvider> */}
  </StrictMode>
);
