import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// child component ditulis di bawah parent component
// Tidak boleh di bawahnya
function Header() {
  // const style = {
  //   color: "red",
  //   fontSize: "48px",
  //   textTransform: "uppercase",
  // };
  const style = {};

  return (
    <header className="header">
      <h1
        // style={{
        //   color: "red",
        //   fontSize: "32px",
        //   textTransform: "uppercase",
        // }}
        style={style}
      >
        Warteg Mang Udin
      </h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Menu kita</h2>
      <Food></Food>
      <Food />
      <Food />
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  if (hour < openHour || hour > closeHour) {
    alert("Maaf kita tutup");
  } else {
    alert("Yes kita buka");
  }

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. Warteg Mang Udin.
    </footer>
  );
}

function Food() {
  return (
    <div>
      <img src="food/nasi-goreng.jpg" alt="" width={200} height={140} />
      <h3>Nasi Goreng Mang Udin</h3>
      <p>Ini adalah nasi goreng</p>
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
