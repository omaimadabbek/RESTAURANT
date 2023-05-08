import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Outlet } from "react-router-dom";
import Login from "./component/Page/Login/login";



const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <Outlet/> */}
      {/* <Login/>  */}
    </BrowserRouter>
  </React.StrictMode>
);
