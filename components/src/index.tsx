import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

// do not import any css files in this tsx file
// the webpack is configured to only process the css inside the src/app and src/lib folder
// all the global css file import goes into src/app/index/tsx

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
