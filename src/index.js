import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// child component ditulis di bawah parent component
// Tidak boleh di bawahnya
function Header() {
  return <h1>Warteg Mang Udin</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Menu kita</h2>
      <Food></Food>
      <Food />
      <Food />
    </div>
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

  return <footer>{new Date().toLocaleTimeString()}. Warteg Mang Udin.</footer>;
}

function Food() {
  return (
    <div>
      <img src="food/nasi-goreng.jpg" alt="" width={100} height={70} />
      <h2>Nasi Goreng Mang Udin</h2>
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
