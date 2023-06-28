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
      <Food
        nama="Nasi Goreng"
        deskripsi="Nasi yang digoreng dengan bumbu rempah khas Indonesia"
        harga={25000}
        foto="food/nasi-goreng.jpg"
        stok={Math.random() >= 0.5 ? true : false}
      />
      <Food
        nama="Sate Ayam"
        deskripsi="Potongan daging ayam yang ditusuk dan dibakar, disajikan dengan bumbu kacang"
        harga={15000}
        foto="food/sate-ayam.jpg"
        stok={Math.random() >= 0.5 ? true : false}
      />
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

function Food(props) {
  console.log(props);
  return (
    <div className="food">
      <img src={props.foto} alt={props.nama} width={200} height={140} />
      <div>
        <h3>{props.nama}</h3>
        <p>{props.deskripsi}</p>
        <span>Rp{props.harga}</span>
      </div>
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
