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
// 注意，react-redux如果引入了，容器组件关联了redux，会自动更新状态
/*
store.subscribe(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
*/