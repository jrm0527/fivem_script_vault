import React from "react";
import ReactDom from "react-dom";
import App from "./App.jsx";

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(App());
ReactDom.render(React.createElement(App), document.getElementById("root"));