import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import "./index.css";
import GlobalStateContext from "./Context/GlobalContext.tsx";

createRoot(document.getElementById("root")!).render(
  <GlobalStateContext>
    <App />
  </GlobalStateContext>
);
