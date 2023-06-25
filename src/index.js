import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello, React!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /**
   * digunakan selama development dan dampaknya akan melakukan render dua kali
   * untuk cek bug atau outdated API react
   */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
