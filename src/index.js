import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// redux托管的状态，但是状态需要通知react，因此这里的通过redux的订阅机制拿到状态变更信息，然后重新render即可
store.subscribe(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});