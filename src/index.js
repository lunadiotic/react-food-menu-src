import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <Food />
    </div>
  );
}

// child component ditulis di bawah parent component
// Tidak boleh di bawahnya
function Food() {
  return (
    <div>
      <img src="food/nasi-goreng.jpg" alt="" />
      <h2>Nasi Goreng</h2>
      <p>Nasi Goreng mang udin</p>
    </div>
  );
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
