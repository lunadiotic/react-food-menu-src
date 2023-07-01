import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import data from "./data.js";

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
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Warteg Mang Udin</h1>
    </header>
  );
}

function Menu() {
  const foods = data;
  // const foods = [];
  const numFoods = foods.length;
  return (
    <main className="menu">
      <h2>Menu kita</h2>
      {numFoods > 0 ? (
        <ul className="foods">
          {foods.map((food) => (
            <Food foodObj={food} key={food.nama} />
          ))}
        </ul>
      ) : (
        <p>Kosong gan, besok dateng lagi yak!</p>
      )}
      {/* <Food
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
      /> */}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <OpenOrder closeHour />
      ) : (
        <CloseOrder closeHour={closeHour} openHour={openHour} />
      )}
    </footer>
  );
}

function OpenOrder(props) {
  return (
    <div className="order">
      <p>
        Kami siap melayani sampai jam tutup {props.closeHour}:00 atau pesan
        online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

function CloseOrder(props) {
  return (
    <p>
      Maaf gan masih tutup. Coba dateng lagi sekitar jam {props.openHour}-
      {props.closeHour} ya.
    </p>
  );
}

function Food(props) {
  if (!props.foodObj.stok) return null;
  return (
    <li className="food">
      <img
        src={props.foodObj.foto}
        alt={props.foodObj.nama}
        width={200}
        height={140}
      />
      <div>
        <h3>{props.foodObj.nama}</h3>
        <p>{props.foodObj.deskripsi}</p>
        <span>Rp{props.foodObj.harga}</span>
      </div>
    </li>
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
